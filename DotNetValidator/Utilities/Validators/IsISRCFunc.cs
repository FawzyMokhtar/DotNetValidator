using System;
using System.Text.RegularExpressions;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is a valid international standard recording code
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel IsISRC(this ValidationModel model, string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (!Regex.IsMatch(value.ToString(), @"^[A-Z]{2}-?[A-Z\d]{3}-?\d{2}-?\d{5}$"))
                        model.AddError(errorMessage ?? DefaultErrorMessages.IsISRC);
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.IsISRC);
            }
            return model;
        }
    }
}
