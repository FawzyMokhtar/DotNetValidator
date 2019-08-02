using System;
using System.Text.RegularExpressions;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is a valid port number, note: the maximum port number is 65535.
        /// <para>Supported Data Types: Strings, Integers.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator IsPort(this Validator validator, string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (!Regex.IsMatch(value.ToString(), @"^[0-9]+$"))
                        validator.AddError(errorMessage ?? DefaultErrorMessages.IsMACAddress);
                    else if (int.Parse(value.ToString()) < 1 || int.Parse(value.ToString()) > 65535)
                        validator.AddError(errorMessage ?? DefaultErrorMessages.IsPort);
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.IsPort);
            }
            return validator;
        }
    }
}
