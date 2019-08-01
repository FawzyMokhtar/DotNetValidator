using System;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is not null
        /// <para>Supported Data Types : All data types</para>
        /// </summary>
        /// <param name="model">The validator model to add more validations or sanitization</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A Validator</returns>
        public static Validator IsNotNull(this Validator model, string errorMessage = null)
        {
            try
            {
                if (model.GetValue() == null)
                        model.AddError(errorMessage ?? DefaultErrorMessages.IsNotNull);
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.IsNotNull);
            }
            return model;
        }
    }
}
