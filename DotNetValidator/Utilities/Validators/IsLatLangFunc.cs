using System;
using System.Text.RegularExpressions;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is a valid gps coordinates, latitude and longitude
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel IsLatLang(this ValidationModel model, string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (!Regex.IsMatch(value.ToString(),
                                       @"^([-+]?)([\d]{1,2})(((\.)(\d+)(,)))(\s*)(([-+]?)([\d]{1,3})((\.)(\d+))?)$"
                                      )
                       )
                        model.AddError(errorMessage ?? DefaultErrorMessages.IsLatLang);
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.IsLatLang);
            }
            return model;
        }
    }
}
