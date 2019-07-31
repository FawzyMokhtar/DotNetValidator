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
        /// Checks if the property's value is not null
        /// <para>Supported Data Types : All data types</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel IsNotNull(this ValidationModel model, string errorMessage = null)
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
