using System;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is in a given range.
        /// <para>Supported Data Types: Doubles, Decimals, Floats, Singles, 
        /// Longs, Integers, Shorts and Bytes.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="minValue">The minimum value.</param>
        /// <param name="maxValue">The maximum value.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator IsInRange(this Validator validator, double minValue, double maxValue, 
            string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (double.Parse(value.ToString()) < minValue || double.Parse(value.ToString()) > maxValue)
                        validator.AddError(errorMessage ?? DefaultErrorMessages.IsInRange(minValue, maxValue));
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.IsInRange(minValue, maxValue));
            }
            return validator;
        }

        /// <summary>
        /// Checks if the property's value is in a given range
        /// <para>Supported Data Types: DateTimes.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="minTime">The minimum dateTime.</param>
        /// <param name="maxTime">The maximum dateTime.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator IsInRange(this Validator validator, DateTime minDateTime, 
            DateTime maxDateTime, string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (Convert.ToDateTime(value.ToString()) < minDateTime || 
                        Convert.ToDateTime(value.ToString()) > maxDateTime
                       )
                        validator.AddError(errorMessage ?? DefaultErrorMessages.IsInRange(minDateTime, maxDateTime));
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.IsInRange(minDateTime, maxDateTime));
            }
            return validator;
        }

        /// <summary>
        /// Checks if the property's value is in a given range.
        /// <para>Supported Data Types: TimeSpans.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="minTime">The minimum time.</param>
        /// <param name="maxTime">The maximum time.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator IsInRange(this Validator validator, TimeSpan minTime,
            TimeSpan maxTime, string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (TimeSpan.Parse(value.ToString()) < minTime ||
                        TimeSpan.Parse(value.ToString()) > maxTime
                       )
                        validator.AddError(errorMessage ?? DefaultErrorMessages.IsInRange(minTime, maxTime));
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.IsInRange(minTime, maxTime));
            }
            return validator;
        }
    }
}
