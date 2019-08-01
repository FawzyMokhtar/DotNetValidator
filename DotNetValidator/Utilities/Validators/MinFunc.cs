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
        /// Checks if the property's value is not lower than the given minimum  value
        /// <para>Supported Data Types : Doubles, Decimals, Floats, Singles, 
        /// Longs, Integers, Shorts and Bytes</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="minValue">The minimum value</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel Min(this ValidationModel model, double minValue, string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (double.Parse(value.ToString()) < minValue)
                        model.AddError(errorMessage ?? DefaultErrorMessages.Min(minValue));
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.Min(minValue));
            }
            return model;
        }

        /// <summary>
        /// Checks if the property's value is not lower than the given minimum  value
        /// <para>Supported Data Types : DateTimes</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="minTime">The minimum dateTime</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel Min(this ValidationModel model, DateTime minDateTime,
            string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (Convert.ToDateTime(value.ToString()) < minDateTime)
                        model.AddError(errorMessage ?? DefaultErrorMessages.Min(minDateTime));
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.Min(minDateTime));
            }
            return model;
        }

        /// <summary>
        /// Checks if the property's value is not lower than the given minimum  value
        /// <para>Supported Data Types : TimeSpans</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="minTime">The minimum time</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel Min(this ValidationModel model, TimeSpan minTime,
            string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (TimeSpan.Parse(value.ToString()) < minTime)
                        model.AddError(errorMessage ?? DefaultErrorMessages.Min(minTime));
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.Min(minTime));
            }
            return model;
        }
    }
}
