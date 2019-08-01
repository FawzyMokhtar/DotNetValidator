using System;
using DotNetValidator.Models.Errors;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is a valid international standard book number.
        /// <para>Supported Data Types: Strings.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator IsISBN(this Validator validator, string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    var isbn = value.ToString();
                    // length must be 10 
                    var n = isbn.Length;
                    if (n != 10)
                    {
                        validator.AddError(errorMessage ?? DefaultErrorMessages.IsISBN);
                        return validator;
                    }

                    // Computing weighted sum of 
                    // first 9 digits 
                    int sum = 0;
                    for (int i = 0; i < 9; i++)
                    {
                        int digit = isbn[i] - '0';

                        if (0 > digit || 9 < digit)
                        {
                            validator.AddError(errorMessage ?? DefaultErrorMessages.IsISBN);
                            return validator;
                        }

                        sum += (digit * (10 - i));
                    }

                    // Checking last digit. 
                    char last = isbn[9];
                    if (last != 'X' && (last < '0' || last > '9'))
                    {
                        validator.AddError(errorMessage ?? DefaultErrorMessages.IsISBN);
                        return validator;
                    }

                    // If last digit is 'X', add 10 
                    // to sum, else add its value. 
                    sum += ((last == 'X') ? 10 : (last - '0'));

                    // Return true if weighted sum 
                    // of digits is divisible by 11. 
                    if (sum % 11 != 0)
                    {
                        validator.AddError(errorMessage ?? DefaultErrorMessages.IsISBN);
                        return validator;
                    }
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.IsISBN);
            }
            return validator;
        }
    }
}
