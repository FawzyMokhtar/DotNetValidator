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
        /// Checks if the property's value is in the given white-list
        /// <para>Supported Data Types : All primitive data types</para>
        /// </summary>
        /// <typeparam name="TParam">The actual type of the property</typeparam>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="whiteList">An array of white-list values</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel WhiteList<TParam>(this ValidationModel model, TParam[] whiteList, string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (!whiteList.Contains((TParam)value))
                        model.AddError(errorMessage ?? DefaultErrorMessages.WhiteList);
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.WhiteList);
            }
            return model;
        }
    }
}
