using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DotNetValidator
{
    public static class CustomSanitizerFunc
    {
        /// <summary>
        /// Creates a custom sanitizer method that accepts an object value and returns a new object value
        /// that has been modified using the custom sanitizer
        /// <para>Supported Data Types : All types</para>
        /// </summary>
        /// <typeparam name="T">The type of data model</typeparam>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="customSanitizer">A custom sanitizer that accepts an object value and returns a new object value 
        /// that has been modified</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel<T> CustomSanitizer<T>(this ValidationModel<T> model, Func<object, object> customSanitizer)
        {
            try
            {
                model.SetValue(customSanitizer(model.GetValue()));
            }
            catch (Exception)
            {
            }
            return model;
        }

        /// <summary>
        /// Creates a custom sanitizer method that accepts a TSource value and returns a new TSource value
        /// that has been modified using the custom sanitizer
        /// <para>Supported Data Types : All types</para>
        /// </summary>
        /// <typeparam name="T">The type of data model</typeparam>
        /// <typeparam name="TSource">The actual type of property</typeparam>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="customSanitizer">A custom sanitizer that accepts a TSource value and returns a new TSource value 
        /// that has been modified</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel<T> CustomSanitizer<T, TSource>(this ValidationModel<T> model, Func<TSource, TSource> customSanitizer)
        {
            try
            {
                model.SetValue(customSanitizer((TSource)model.GetValue()));
            }
            catch (Exception)
            {
            }
            return model;
        }
    }
}
