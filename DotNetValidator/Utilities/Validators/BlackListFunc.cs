using System;
using System.Linq;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is in the given black-list.
        /// <para>Supported Data Types: All primitive data types.</para>
        /// </summary>
        /// <typeparam name="TParam">The actual type of the property.</typeparam>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="blackList">An array of black-list values.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator BlackList<TParam>(this Validator validator, TParam[] blackList, string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (blackList.Contains((TParam)value))
                        validator.AddError(errorMessage ?? DefaultErrorMessages.BlackList);
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.BlackList);
            }
            return validator;
        }
    }
}
