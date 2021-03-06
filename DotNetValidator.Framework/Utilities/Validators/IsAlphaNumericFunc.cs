﻿using System;
using System.Text.RegularExpressions;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is an alphanumeric string,
        /// empty strings, whitespaces, newline and tabs are rejected.
        /// <para>Supported Data Types: Strings.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator IsAlphaNumeric(this Validator validator, string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (!Regex.IsMatch(value.ToString(), @"^[a-zA-Z0-9]+$"))
                        validator.AddError(errorMessage ?? DefaultErrorMessages.IsAlphaNumeric);
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.IsAlphaNumeric);
            }
            return validator;
        }
    }
}
