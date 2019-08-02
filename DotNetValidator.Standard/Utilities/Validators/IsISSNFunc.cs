using System;
using System.Text.RegularExpressions;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is a valid international standard serial number.
        /// <para>Supported Data Types: Strings.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator IsISSN(this Validator validator, string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (!Regex.IsMatch(value.ToString(),
                                       @"^[0-9]{4}-[0-9]{3}[0-9xX]$|^ISSN [0-9]{4}-[0-9]{3}[0-9xX]$"
                                      )
                        )
                        validator.AddError(errorMessage ?? DefaultErrorMessages.IsISSN);
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.IsISSN);
            }
            return validator;
        }
    }
}
