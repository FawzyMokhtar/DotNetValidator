using System;

namespace DotNetValidator
{
    public static partial class SanitizationUtility
    {

        /// <summary>
        /// A Sanitizer that removes all leading occurrences of a set of characters
        /// from the current validated property.
        /// <para>Supported Data Types: Strings.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="traimChars">The set of characters that will be trimmed.</param>
        /// <returns>A Validator.</returns>
        public static Validator TrimStart(this Validator validator, params char[] traimChars)
        {
            try
            {
                validator.SetValue(validator.GetValue().ToString().TrimStart(traimChars));
            }
            catch (Exception)
            {
            }
            return validator;
        }
    }
}
