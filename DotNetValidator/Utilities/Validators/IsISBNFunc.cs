using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is a valid international standard book number
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="errorMessage">An optional validation error message</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel IsISBN(this ValidationModel model, string errorMessage = null)
        {
            try
            {
                var value = model.GetValue();
                if (!model.IsOptional || value != null)
                {
                    var isbn = value.ToString();
                    // length must be 10 
                    var n = isbn.Length;
                    if (n != 10)
                    {
                        model.AddError(errorMessage ?? DefaultErrorMessages.IsISBN);
                        return model;
                    }

                    // Computing weighted sum of 
                    // first 9 digits 
                    int sum = 0;
                    for (int i = 0; i < 9; i++)
                    {
                        int digit = isbn[i] - '0';

                        if (0 > digit || 9 < digit)
                        {
                            model.AddError(errorMessage ?? DefaultErrorMessages.IsISBN);
                            return model;
                        }

                        sum += (digit * (10 - i));
                    }

                    // Checking last digit. 
                    char last = isbn[9];
                    if (last != 'X' && (last < '0' || last > '9'))
                    {
                        model.AddError(errorMessage ?? DefaultErrorMessages.IsISBN);
                        return model;
                    }

                    // If last digit is 'X', add 10 
                    // to sum, else add its value. 
                    sum += ((last == 'X') ? 10 : (last - '0'));

                    // Return true if weighted sum 
                    // of digits is divisible by 11. 
                    if (sum % 11 != 0)
                    {
                        model.AddError(errorMessage ?? DefaultErrorMessages.IsISBN);
                        return model;
                    }
                }
            }
            catch (Exception)
            {
                model.AddError(errorMessage ?? DefaultErrorMessages.IsISBN);
            }
            return model;
        }
    }
}
