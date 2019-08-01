using System;
using System.Text.RegularExpressions;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is a valid file uri over the network (http, https)
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel IsFileUri(this ValidationModel model, string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (!Regex.IsMatch(value.ToString(),
                                       @"^(http(s?):)\/\/(www.)?([\w-]+\.)?([\w-]+\.[a-zA-z]+)\/(\w*\/)?[\w-\.]+\.([a-zA-z]+)$"
                                      )
                       )
                        model.AddError(errorMessage ?? DefaultErrorMessages.IsFileUri);
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.IsFileUri);
            }
            return model;
        }
    }
}
