using System;
using System.Linq;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value contains the given string value.
        /// <para>Supported Data Types: Strings.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="str">The value that the property's value should contains.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator</returns>
        public static Validator Contains(this Validator validator, string str
            , string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (!value.ToString().Contains(str))
                        validator.AddError(errorMessage ?? DefaultErrorMessages.Contains(str));
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.Contains(str));
            }
            return validator;
        }

        /// <summary>
        /// Checks if the property's value contains at least one of the given string values.
        /// <para>Supported Data Types: Strings.</para>
        /// </summary>
        
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <param name="strs">The values that the property's value should contains one at least.</param>
        /// <returns>A Validator.</returns>
        public static Validator Contains(this Validator validator, string errorMessage = null
            , params string[] strs)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (!strs.Any(str => value.ToString().Contains(str)))
                        validator.AddError(errorMessage ?? DefaultErrorMessages.Contains(strs));
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.Contains(strs));
            }
            return validator;
        }
    }
}
