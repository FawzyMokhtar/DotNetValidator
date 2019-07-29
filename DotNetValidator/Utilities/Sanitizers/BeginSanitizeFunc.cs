using DotNetValidator.Models.Sanitizers;
using DotNetValidator.Models.Validators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DotNetValidator
{
    public static class BeginSanitizeFunc
    {
        /// <summary>
        /// Starts the sanitization for the current Property
        /// </summary>
        /// <typeparam name="T">The type of data model</typeparam>
        /// <param name="model">The validation model to sanitize</param>
        /// <returns>A SanitizerModel</returns>
        public static SanitizerModel<T> BeginSanitize<T>(this ValidationModel<T> model)
        {
            return new SanitizerModel<T>(model);
        }
    }
}
