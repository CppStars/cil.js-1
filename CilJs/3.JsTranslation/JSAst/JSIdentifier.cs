using CilJs.JsTranslation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSRaw : JSExpression
    {
        public string Value { get; set; }

        public override string ToString(Formatting formatting)
        {
            return Value;
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }

    class JSIdentifier : JSExpression
    {
        private string _Name;
        public string Name
        {
            get
            {
                return _Name;
            }
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                    throw new InvalidOperationException();

                if (value.Contains('<') || value.Contains('>'))
                    throw new InvalidOperationException();

                _Name = value;
            }
        }

        public override string ToString(Formatting formatting)
        {
            return Name;
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
