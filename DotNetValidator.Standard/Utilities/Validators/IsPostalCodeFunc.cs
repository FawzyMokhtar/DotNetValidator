using System;
using System.Text.RegularExpressions;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is a valid postal code,
        /// note: this method uses both the 5-digits and 9-digits formates,
        /// so `12345` & `12345-6789` are both valid.
        /// <para>Supported Data Types: Strings, Integers.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator IsPostalCode(this Validator validator, string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (!Regex.IsMatch(value.ToString(), @"^[0-9]{5}(?:-[0-9]{4})?$"))
                        validator.AddError(errorMessage ?? DefaultErrorMessages.IsPostalCode);
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.IsPostalCode);
            }
            return validator;
        }
    }
}
