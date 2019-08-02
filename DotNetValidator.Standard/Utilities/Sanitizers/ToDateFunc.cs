using System;

namespace DotNetValidator
{
    public static partial class SanitizationUtility
    {
        /// <summary>
        /// A Sanitizer that converts the current Property value to a DateTime.
        /// <para>Supported Data Types: Strings.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <returns>A Validator.</returns>
        public static Validator ToDateTime(this Validator validator)
        {
            try
            {
                validator.SetValue(Convert.ToDateTime(validator.GetValue().ToString()));
            }
            catch (Exception)
            {
            }
            return validator;
        }
    }
}
