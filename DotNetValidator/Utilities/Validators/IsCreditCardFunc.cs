using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DotNetValidator.Helpers;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is a valid credit card using the Luhn algorithm (Mod 10)
        /// <para>Supported Data Types : Strings, Integers</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel IsCreditCard(this ValidationModel model, string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    if (!CreditCardVerification.IsValidCardNumber(value.ToString()))
                        model.AddError(errorMessage ?? DefaultErrorMessages.IsCreditCard);
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.IsCreditCard);
            }
            return model;
        }
    }
}
