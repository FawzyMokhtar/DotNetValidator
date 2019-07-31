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
        /// <typeparam name="T">The type of data model</typeparam>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel<T> IsNotNull<T>(this ValidationModel<T> model, string errorMessage = null)
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
