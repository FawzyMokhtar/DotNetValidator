using System;

namespace DotNetValidator
{
    public static partial class SanitizationUtility
    {
        /// <summary>
        /// A Sanitizer that removes all leading and trailing white-space characters 
        /// from the current validated property.
        /// <para>Supported Data Types: Strings.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <returns>A Validator.</returns>
        public static Validator Trim(this Validator validator)
        {
            try
            {
                validator.SetValue(validator.GetValue().ToString().Trim());
            }
            catch (Exception)
            {
            }
            return validator;
        }

        /// <summary>
        /// A Sanitizer that removes all leading and trailing occurrences of a set of characters
        /// from the current validated property.
        /// <para>Supported Data Types: Strings.</para>
        /// </summary>
        
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="trimChars">The set of characters that will be trimmed.</param>
        /// <returns>A Validator.</returns>
        public static Validator Trim(this Validator validator, params char[] trimChars)
        {
            try
            {
                validator.SetValue(validator.GetValue().ToString().Trim(trimChars));
            }
            catch (Exception)
            {
            }
            return validator;
        }
    }
}
