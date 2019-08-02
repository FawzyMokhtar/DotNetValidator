using System;
using System.Text.RegularExpressions;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is a valid file uri over the network (http, https).
        /// <para>Supported Data Types: Strings.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator IsFileUri(this Validator validator, string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (!Regex.IsMatch(value.ToString(),
                                       @"^(http(s?):)\/\/(www.)?([\w-]+\.)?([\w-]+\.[a-zA-z]+)\/(\w*\/)?[\w-\.]+\.([a-zA-z]+)$"
                                      )
                       )
                        validator.AddError(errorMessage ?? DefaultErrorMessages.IsFileUri);
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.IsFileUri);
            }
            return validator;
        }
    }
}
