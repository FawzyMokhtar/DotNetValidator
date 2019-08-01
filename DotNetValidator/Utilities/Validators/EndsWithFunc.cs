using System;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value ends with the given string value
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <param name="model">The validator model to add more validations or sanitization</param>
        /// <param name="str">The string value that the property's value should ends with</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A Validator</returns>
        public static Validator EndsWith(this Validator model, string str, string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (!value.ToString().EndsWith(str))
                        model.AddError(errorMessage ?? DefaultErrorMessages.EndsWith(str));
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.EndsWith(str));
            }
            return model;
        }
    }
}
