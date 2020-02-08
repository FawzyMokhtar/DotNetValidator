using System;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is a valid global unique identifier (Guid).
        /// <para>Supported Data Types: Strings, Guids.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="allowEmpty">Indicates whether empty guids are allowed or not, 
        /// by default it is not allowed.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator IsGuid(this Validator validator, bool allowEmpty = false,
            string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (!Guid.TryParse(value.ToString(), out var guid) || (Guid.Empty.Equals(guid) && !allowEmpty))
                        validator.AddError(errorMessage ?? DefaultErrorMessages.IsGuid);
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.IsGuid);
            }
            return validator;
        }
    }
}
