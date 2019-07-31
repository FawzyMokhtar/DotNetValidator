using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value contains the given string value
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="str">The value that the property's value should contains</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel Contains(this ValidationModel model, string str
            , string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (!value.ToString().Contains(str))
                        model.AddError(errorMessage ?? DefaultErrorMessages.Contains(str));
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.Contains(str));
            }
            return model;
        }

        /// <summary>
        /// Checks if the property's value contains at least one of the given string values
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <param name="strs">The values that the property's value should contains one at least</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel Contains(this ValidationModel model, string errorMessage = null
            , params string[] strs)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (!strs.Any(str => value.ToString().Contains(str)))
                        model.AddError(errorMessage ?? DefaultErrorMessages.Contains(strs));
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.Contains(strs));
            }
            return model;
        }
    }
}
