using System;
using System.Text.RegularExpressions;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is a valid base64 string 
        /// or a valid base64 file string. e.g. `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACmYAAAn/CAYAAAB0gb6+..`
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel IsBase64(this ValidationModel model, string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (!Regex.IsMatch(value.ToString(),
                        "^(?:data:[a-zA-Z]+/[a-zA-Z]+;base64,|[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$")
                       )
                        model.AddError(errorMessage ?? DefaultErrorMessages.IsBase64);
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.IsBase64);
            }
            return model;
        }
    }
}
