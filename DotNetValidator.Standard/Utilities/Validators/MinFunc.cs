using System;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is not lower than the given minimum value
        /// <para>Supported Data Types: Doubles, Decimals, Floats, Singles, 
        /// Longs, Integers, Shorts and Bytes.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="minValue">The minimum value.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator Min(this Validator validator, double minValue, string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (double.Parse(value.ToString()) < minValue)
                        validator.AddError(errorMessage ?? DefaultErrorMessages.Min(minValue));
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.Min(minValue));
            }
            return validator;
        }

        /// <summary>
        /// Checks if the property's value is not lower than the given minimum value.
        /// <para>Supported Data Types: DateTimes.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="minTime">The minimum dateTime.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator Min(this Validator validator, DateTime minDateTime,
            string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (Convert.ToDateTime(value.ToString()) < minDateTime)
                        validator.AddError(errorMessage ?? DefaultErrorMessages.Min(minDateTime));
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.Min(minDateTime));
            }
            return validator;
        }

        /// <summary>
        /// Checks if the property's value is not lower than the given minimum value.
        /// <para>Supported Data Types: TimeSpans.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="minTime">The minimum time.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator Min(this Validator validator, TimeSpan minTime,
            string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (TimeSpan.Parse(value.ToString()) < minTime)
                        validator.AddError(errorMessage ?? DefaultErrorMessages.Min(minTime));
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.Min(minTime));
            }
            return validator;
        }
    }
}
