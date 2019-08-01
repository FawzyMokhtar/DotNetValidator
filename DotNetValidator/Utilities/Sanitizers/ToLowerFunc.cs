using System;

namespace DotNetValidator
{
    public static partial class SanitizationUtility
    {
        /// <summary>
        /// A Sanitizer that modifies the current Property value with a new lowercase copy.
        /// <para>Supported Data Types: Strings.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <returns>A Validator.</returns>
        public static Validator ToLower(this Validator validator)
        {
            try
            {
                validator.SetValue(validator.GetValue().ToString().ToLower());
            }
            catch (Exception)
            {
            }
            return validator;
        }
    }
}
