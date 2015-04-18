﻿using CilJs.Runtime.TranslatorServices;

namespace CilJs.JavaScript
{
    [JsNoCopy]
    public struct Boolean
    {
        [JsReplace("({0} ? 1 : 0)")]
        public static extern explicit operator bool(Boolean b);
    }
}
