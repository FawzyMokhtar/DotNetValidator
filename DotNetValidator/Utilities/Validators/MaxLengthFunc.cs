using System;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Validates the length of the property's value using the given maximum length
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <param name="model">The validator model to add more validations or sanitization</param>
        /// <param name="maxLength">The maximum length</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A Validator</returns>
        public static Validator MaxLength(this Validator model, long maxLength, string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (value.ToString().Length > maxLength)
                        model.AddError(errorMessage ?? DefaultErrorMessages.MaxLength(maxLength));
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.MaxLength(maxLength));
            }
            return model;
        }
    }
}
