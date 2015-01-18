
using Braille.Runtime.TranslatorServices;

namespace System.Runtime.InteropServices
{
    [JsIgnore]
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Enum | AttributeTargets.Interface)]
    public sealed class ComVisibleAttribute : Attribute
    {
        public ComVisibleAttribute(bool serializable)
        {
        }
    }
}