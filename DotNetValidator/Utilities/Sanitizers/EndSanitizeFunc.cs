using DotNetValidator.Models.Sanitizers;
using DotNetValidator.Models.Validators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DotNetValidator
{
    public static class EndSanitizeFunc
    {
        /// <summary>
        /// Ends the sanitization for the current Property and begins the validation stage
        /// </summary>
        /// <typeparam name="T">The type of data model</typeparam>
        /// <param name="model">The sanitizer model to add more sanitization</param>
        /// <returns>A SanitizerModel</returns>
        public static ValidationModel<T> EndSanitize<T>(this SanitizerModel<T>  model)
        {
            return new ValidationModel<T>(model);
        }
    }
}
