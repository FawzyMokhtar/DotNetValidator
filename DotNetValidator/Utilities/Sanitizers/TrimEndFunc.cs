using System;

namespace DotNetValidator
{
    public static partial class SanitizationUtility
    {

        /// <summary>
        /// A Sanitizer that removes all trailing occurrences of a set of characters
        /// from the current validated property
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <param name="model">The validator model to add more validations or sanitization</param>
        /// <param name="traimChars">The set of characters that will be trimmed</param>
        /// <returns>A Validator</returns>
        public static Validator TrimEnd(this Validator model, params char[] traimChars)
        {
            try
            {
                model.SetValue(model.GetValue().ToString().TrimEnd(traimChars));
            }
            catch (Exception)
            {
            }
            return model;
        }
    }
}
