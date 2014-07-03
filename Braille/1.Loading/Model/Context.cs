﻿using Braille.Ast;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Braille.Loading.Model
{
    class Context: IDisposable
    {
        public Universe ReflectionUniverse { get; private set; }

        public List<CilAssembly> Assemblies { get; private set; }

        public SystemTypes SystemTypes { get; private set; }

        struct MethodId
        {
            public int assembly; public int metadataToken;
            public MethodId(int asm, MethodBase mb)
            {
                assembly = asm;
                metadataToken = mb.MetadataToken;
            }
        }
        private Dictionary<MethodId, CilMethod> methodLookup;
        
        public Context(Universe universe, List<CilAssembly> asms)
        {
            ReflectionUniverse = universe;
            Assemblies = asms;
            SystemTypes = new SystemTypes(universe);
        }

        public CilMethod LookupMethod(MethodBase mb)
        {
            if (methodLookup == null)
            {
                methodLookup = Assemblies
                    .SelectMany(
                        (a, i) => a
                            .Types
                            .SelectMany(t => t.Methods)
                            .Select(m => new { i, m }))
                    .ToDictionary(
                        m => new MethodId(m.i, m.m.ReflectionMethod), m => m.m);
            }

            var idx = new MethodId(Assemblies.Select(a => a.ReflectionAssembly).IndexOf(mb.DeclaringType.Assembly), mb);

            return methodLookup[idx];
        }

        public void Dispose()
        {
            ReflectionUniverse.Dispose();
        }
    }
}
