using System;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is not more than the given maximum value.
        /// <para>Supported Data Types: Doubles, Decimals, Floats, Singles, 
        /// Longs, Integers, Shorts and Bytes.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="maxValue">The maximum value.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator Max(this Validator validator, double maxValue, string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (double.Parse(value.ToString()) > maxValue)
                        validator.AddError(errorMessage ?? DefaultErrorMessages.Max(maxValue));
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.Max(maxValue));
            }
            return validator;
        }

        /// <summary>
        /// Checks if the property's value is not more than the given maximum value.
        /// <para>Supported Data Types: DateTimes.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="maxTime">The maximum dateTime.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator Max(this Validator validator, DateTime maxDateTime,
            string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (Convert.ToDateTime(value.ToString()) > maxDateTime)
                        validator.AddError(errorMessage ?? DefaultErrorMessages.Max(maxDateTime));
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.Max(maxDateTime));
            }
            return validator;
        }

        /// <summary>
        /// Checks if the property's value is not more than the given maximum value.
        /// <para>Supported Data Types: TimeSpans.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="maxTime">The maximum time.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator</returns>
        public static Validator Max(this Validator validator, TimeSpan maxTime,
            string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (TimeSpan.Parse(value.ToString()) > maxTime)
                        validator.AddError(errorMessage ?? DefaultErrorMessages.Max(maxTime));
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.Max(maxTime));
            }
            return validator;
        }
    }
}
