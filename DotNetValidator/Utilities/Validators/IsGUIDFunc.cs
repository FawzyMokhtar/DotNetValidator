using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is a valid global unique identifier (Guid)
        /// <para>Supported Data Types : Strings, Guids</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="allowEmpty">Indicates whether empty guids are allowed or not, 
        /// by default it is not allowed</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel IsGuid(this ValidationModel model, bool allowEmpty = false,
            string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (!Guid.TryParse(value.ToString(), out var guid) || (Guid.Empty.Equals(guid) && !allowEmpty))
                        model.AddError(errorMessage ?? DefaultErrorMessages.IsGuid);
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.IsGuid);
            }
            return model;
        }
    }
}
