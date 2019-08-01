using System;
using System.Text.RegularExpressions;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is a valid international standard serial number
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <param name="model">The validator model to add more validations or sanitization</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A Validator</returns>
        public static Validator IsISSN(this Validator model, string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (!Regex.IsMatch(value.ToString(),
                                       @"^[0-9]{4}-[0-9]{3}[0-9xX]$|^ISSN [0-9]{4}-[0-9]{3}[0-9xX]$"
                                      )
                        )
                        model.AddError(errorMessage ?? DefaultErrorMessages.IsISSN);
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.IsISSN);
            }
            return model;
        }
    }
}
