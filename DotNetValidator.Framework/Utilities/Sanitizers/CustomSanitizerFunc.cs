using System;

namespace DotNetValidator
{
    public static partial class SanitizationUtility
    {
        /// <summary>
        /// Creates a custom sanitizer method that accepts an object value and returns a new object value
        /// that has been modified using the custom sanitizer.
        /// <para>Supported Data Types: All types.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="customSanitizer">A custom sanitizer 
        /// that accepts an object value and returns a new object value.
        /// that has been modified.</param>
        /// <returns>A Validator.</returns>
        public static Validator CustomSanitizer(this Validator validator, Func<object, object> customSanitizer)
        {
            try
            {
                validator.SetValue(customSanitizer(validator.GetValue()));
            }
            catch (Exception)
            {
            }
            return validator;
        }

        /// <summary>
        /// Creates a custom sanitizer method that accepts a TSource value and returns a new TSource value
        /// that has been modified using the custom sanitizer.
        /// <para>Supported Data Types: All types.</para>
        /// </summary>
        /// <typeparam name="TSource">The actual type of property.</typeparam>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="customSanitizer">A custom sanitizer that accepts a TSource value 
        /// and returns a new TSource value.
        /// that has been modified.</param>
        /// <returns>A Validator.</returns>
        public static Validator CustomSanitizer<TSource>(this Validator validator, Func<TSource, TSource> customSanitizer)
        {
            try
            {
                validator.SetValue(customSanitizer((TSource)validator.GetValue()));
            }
            catch (Exception)
            {
            }
            return validator;
        }
    }
}
