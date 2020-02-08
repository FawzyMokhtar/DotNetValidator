using System;
using System.Linq;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value contains the given string value.
        /// <para>Supported Data Types: Strings.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="token">The value that the property's value should contains.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator</returns>
        public static Validator Contains(this Validator validator, string token
            , string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (!value.ToString().Contains(token))
                        validator.AddError(errorMessage ?? DefaultErrorMessages.Contains(token));
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.Contains(token));
            }
            return validator;
        }

        /// <summary>
        /// Checks if the property's value contains at least one of the given string values.
        /// <para>Supported Data Types: Strings.</para>
        /// </summary>
        
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <param name="tokens">The values that the property's value should contains one at least.</param>
        /// <returns>A Validator.</returns>
        public static Validator Contains(this Validator validator, string errorMessage = null
            , params string[] tokens)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (!tokens.Any(token => value.ToString().Contains(token)))
                        validator.AddError(errorMessage ?? DefaultErrorMessages.Contains(tokens));
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.Contains(tokens));
            }
            return validator;
        }
    }
}
