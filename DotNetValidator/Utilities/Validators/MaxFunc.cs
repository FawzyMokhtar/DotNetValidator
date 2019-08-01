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
        /// Checks if the property's value is not more than the given maximum  value
        /// <para>Supported Data Types : Doubles, Decimals, Floats, Singles, 
        /// Longs, Integers, Shorts and Bytes</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="maxValue">The maximum value</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel Max(this ValidationModel model, double maxValue, string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (double.Parse(value.ToString()) > maxValue)
                        model.AddError(errorMessage ?? DefaultErrorMessages.Max(maxValue));
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.Max(maxValue));
            }
            return model;
        }

        /// <summary>
        /// Checks if the property's value is not more than the given maximum  value
        /// <para>Supported Data Types : DateTimes</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="maxTime">The maximum dateTime</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel Max(this ValidationModel model, DateTime maxDateTime,
            string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (Convert.ToDateTime(value.ToString()) > maxDateTime)
                        model.AddError(errorMessage ?? DefaultErrorMessages.Max(maxDateTime));
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.Max(maxDateTime));
            }
            return model;
        }

        /// <summary>
        /// Checks if the property's value is not more than the given maximum  value
        /// <para>Supported Data Types : TimeSpans</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="maxTime">The maximum time</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel Max(this ValidationModel model, TimeSpan maxTime,
            string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (TimeSpan.Parse(value.ToString()) > maxTime)
                        model.AddError(errorMessage ?? DefaultErrorMessages.Max(maxTime));
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.Max(maxTime));
            }
            return model;
        }
    }
}
