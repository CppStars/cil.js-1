using CilJs.Ast;
using CilJs.JSAst;
using CilJs.Loading.Model;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CilJs.JsTranslation
{
    /// <summary>
    /// Translates blocks (method bodies, try-catch-finally constructs) into JavaScript AST.
    /// </summary>
    class BlockTranslator : AbstractTranslator
    {
        private CilType type;
        private CilMethod method;
        private JSExpression this_;
        private CilAssembly assembly;

        public BlockTranslator(Context context, CilAssembly assembly, CilType type, CilMethod method, JSExpression this_)
            : base(context)
        {
            this.type = type;
            this.assembly = assembly;
            this.method = method;
            this.this_ = this_;
        }

        public List<JSStatement> Translate(Block block)
        {
            return CreateJsBlock(null, block, 0).Build().ToList();
        }

        private BlockBuilder CreateJsBlock(ProtectedRegion region, Block block, int depth)
        {
            var opTranslator = new OpTranslator(context, assembly, type, method, block);

            var builder = new BlockBuilder(depth, GetPosition(block), region != null && region.FinallyBlock != null);

            foreach (var node in block.Ast)
            {
                var protectedRegion = node as ProtectedRegion;
                var label = node as JumpLabel;
                var expr = node as OpExpression;

                if (protectedRegion != null)
                {
                    if (protectedRegion.CatchBlocks.Count == 0 &&
                        protectedRegion.FaultBlock == null &&
                        protectedRegion.FinallyBlock == null)
                    {
                        builder.InsertStatements(CreateJsBlock(protectedRegion, protectedRegion.TryBlock, depth + 1).Build());
                    }
                    else
                    {
                        builder.InsertStatements(CreateJsTryBlock(protectedRegion, protectedRegion.TryBlock, depth + 1));

                        if (protectedRegion.CatchBlocks.Any() || protectedRegion.FaultBlock != null)
                            builder.InsertStatements(CreateJsCatchBlock(protectedRegion, protectedRegion.CatchBlocks, protectedRegion.FaultBlock, depth + 1));

                        if (protectedRegion.FinallyBlock != null)
                            builder.InsertStatements(CreateJsFinallyBlock(protectedRegion, protectedRegion.FinallyBlock, depth + 1));

                        builder.InsertStatements(new [] { new JSBreakExpression().ToStatement() });
                    }
                }
                else if (label != null)
                {
                    builder.InsertLabel(label);
                }
                else if (expr != null)
                {
                    builder.InsertStatements(opTranslator.Process(expr));
                }
            }

            return builder;
        }

        private int GetPosition(Block block)
        {
            foreach (var node in block.Ast)
            {
                var op = node as OpExpression;
                if (op != null)
                    return op.PrefixTraversal().Min(o => o.Position);

                var b = node as ProtectedRegion;
                if (b != null)
                    return GetPosition(b.TryBlock);
            }

            throw new NotSupportedException();
        }

        private IEnumerable<JSStatement> CreateJsTryBlock(ProtectedRegion region, TryBlock tryBlock, int depth)
        {
            yield return new JSTryBlock { Statements = CreateJsBlock(region, tryBlock, depth).Build().ToList() };
        }

        private IEnumerable<JSStatement> CreateJsCatchBlock(ProtectedRegion region, IEnumerable<CatchBlock> catchBlocks, FaultBlock faultBlock, int p)
        {
            if (catchBlocks.Count() == 1 && catchBlocks.First().CatchType == null)
            {
                yield return new JSCatchBlock { Error = new JSIdentifier { Name = "_" } };
                yield break;
            }

            var handledFlag = new JSIdentifier { Name = "__error_handled_" + p + "__" };

            var statements = new List<JSStatement> 
            {
                JSFactory.Statement(
                    new JSVariableDelcaration
                    {
                        Name = handledFlag.Name,
                        Value = new JSBoolLiteral { Value = false }
                    })
            };

            var exceptionObject = new JSIdentifier { Name = "__error__" };

            foreach (var catchBlock in catchBlocks)
            {
                var block = CreateJsBlock(region, catchBlock, p);

                int index;
                for (index = 0; index < block.Statements.Count; index++)
                {
                    var es = block.Statements[index] as JSSwitchCase;
                    if (es == null)
                        break;
                }

                block.Statements.Insert(index,
                    JSFactory
                        .Assignment(handledFlag, new JSBoolLiteral { Value = true })
                        .ToStatement());

                // assign the exception object to expressions reading from top of the stack

                // ok this is too delicate.. we happen to know it is the second expression.. 

                var expression = catchBlock.Ast.Skip(1).FirstOrDefault() as OpExpression;
                if (expression != null)
                {
                    var locations = expression
                        .StackBefore
                        .First()
                        .Definitions
                        .Cast<ExceptionNode>()
                        .SelectMany(e => e.StoreLocations)
                        ;

                    foreach (var location in locations)
                    {
                        block.Statements.Insert(index, JSFactory.Assignment(location.Name, exceptionObject).ToStatement());
                    }
                }

                statements.Add(new JSIfStatement
                {
                    Condition = new JSBinaryExpression
                    {
                        Left = new JSUnaryExpression { Operand = handledFlag, Operator = "!" },
                        Operator = "&&",
                        Right = new JSBinaryExpression
                        {
                            Left = exceptionObject,
                            Operator = "instanceof",
                            Right = GetTypeIdentifier(catchBlock.CatchType, method.ReflectionMethod, type.ReflectionType, this_)
                        }
                    },
                    Statements = block.Build().ToList()
                });
            }

            statements.Add(new JSIfStatement
            {
                Condition = new JSUnaryExpression { Operand = handledFlag, Operator = "!" },
                Statements = {
                    new JSThrowExpression { Expression = exceptionObject }.ToStatement()
                }
            });

            if (faultBlock != null)
            {
                statements.AddRange(CreateJsFaultBlock(region, faultBlock, p));
            }

            yield return new JSCatchBlock
            {
                Error = exceptionObject,
                Statements = statements
            };
        }

        private IEnumerable<JSStatement> CreateJsFaultBlock(ProtectedRegion region, FaultBlock faultBlock, int p)
        {
            var block = CreateJsBlock(region, faultBlock, p);

            block.Statements.Add(JSFactory.Statement(new JSThrowExpression { Expression = new JSIdentifier { Name = "__error__" } }));

            yield return new JSIfStatement
            {
                Condition = new JSBinaryExpression
                {
                    Left = new JSIdentifier { Name = "__error_handled_" + (block.Depth - 1) + "__" },
                    Operator = "===",
                    Right = new JSBoolLiteral { Value = false }
                },
                Statements = block.Build().ToList()
            };
        }

        private IEnumerable<JSStatement> CreateJsFinallyBlock(ProtectedRegion region, FinallyBlock finallyBlock, int p)
        {
            yield return new JSFinallyBlock
            {
                Statements = CreateJsBlock(region, finallyBlock, p).Build().ToList()
            };
            
        }
    }
}
