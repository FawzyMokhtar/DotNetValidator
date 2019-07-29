using DotNetValidator.Models.Sanitizers;
using DotNetValidator.Models.Validators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DotNetValidator
{
    public static class ToLowerFunc
    {
        /// <summary>
        /// Modifies the current Property value with a new lowercase copy
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <typeparam name="T">The type of data model</typeparam>
        /// <param name="model">The sanitizer model to add more sanitization</param>
        /// <returns>A SanitizerModel</returns>
        public static SanitizerModel<T> ToLower<T>(this SanitizerModel<T> model)
        {
            try
            {
                model.SetValue(model.GetValue().ToString().ToLower());
            }
            catch (Exception)
            {
            }
            return model;
        }
    }
}
