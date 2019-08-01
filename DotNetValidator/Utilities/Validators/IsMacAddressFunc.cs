using System;
using System.Text.RegularExpressions;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is a valid machine address (MAC Address)
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel IsMACAddress(this ValidationModel model, string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (!Regex.IsMatch(value.ToString(), @"^([0-9a-fA-F]{2}[:-]){5}([0-9a-fA-F]{2})$"))
                        model.AddError(errorMessage ?? DefaultErrorMessages.IsMACAddress);
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.IsMACAddress);
            }
            return model;
        }
    }
}
