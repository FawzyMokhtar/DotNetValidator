using System;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is in a given range
        /// <para>Supported Data Types : Doubles, Decimals, Floats, Singles, 
        /// Longs, Integers, Shorts and Bytes</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="minValue">The minimum value</param>
        /// <param name="maxValue">The maximum value</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel IsInRange(this ValidationModel model, double minValue, double maxValue, 
            string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (double.Parse(value.ToString()) < minValue || double.Parse(value.ToString()) > maxValue)
                        model.AddError(errorMessage ?? DefaultErrorMessages.IsInRange(minValue, maxValue));
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.IsInRange(minValue, maxValue));
            }
            return model;
        }

        /// <summary>
        /// Checks if the property's value is in a given range
        /// <para>Supported Data Types : DateTimes</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="minTime">The minimum dateTime</param>
        /// <param name="maxTime">The maximum dateTime</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel IsInRange(this ValidationModel model, DateTime minDateTime, 
            DateTime maxDateTime, string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (Convert.ToDateTime(value.ToString()) < minDateTime || 
                        Convert.ToDateTime(value.ToString()) > maxDateTime
                       )
                        model.AddError(errorMessage ?? DefaultErrorMessages.IsInRange(minDateTime, maxDateTime));
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.IsInRange(minDateTime, maxDateTime));
            }
            return model;
        }

        /// <summary>
        /// Checks if the property's value is in a given range
        /// <para>Supported Data Types : TimeSpans</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="minTime">The minimum time</param>
        /// <param name="maxTime">The maximum time</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel IsInRange(this ValidationModel model, TimeSpan minTime,
            TimeSpan maxTime, string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (TimeSpan.Parse(value.ToString()) < minTime ||
                        TimeSpan.Parse(value.ToString()) > maxTime
                       )
                        model.AddError(errorMessage ?? DefaultErrorMessages.IsInRange(minTime, maxTime));
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.IsInRange(minTime, maxTime));
            }
            return model;
        }
    }
}
