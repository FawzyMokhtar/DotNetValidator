﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Validates the length of the property's value using the given minimum length
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <typeparam name="T">The type of data model</typeparam>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="minLength">The minimum length</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel<T> MinLength<T>(this ValidationModel<T> model, long minLength, string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (value.ToString().Length < minLength)
                        model.AddError(errorMessage ?? DefaultErrorMessages.MinLength(minLength));
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.MinLength(minLength));
            }
            return model;
        }
    }
}