using System;

namespace DotNetValidator
{
    public static partial class SanitizationUtility
    {
        /// <summary>
        /// A Sanitizer that converts the current Property value to a coordinate universal time DateTime.
        /// <para>Supported Data Types: Strings, Dates.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <returns>A Validator.</returns>
        public static Validator ToUtc(this Validator validator)
        {
            try
            {
                validator.SetValue(Convert.ToDateTime(validator.GetValue().ToString()).ToUniversalTime());
            }
            catch (Exception)
            {
            }
            return validator;
        }
    }
}
