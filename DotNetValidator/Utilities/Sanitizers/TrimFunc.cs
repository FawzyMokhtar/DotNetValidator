using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DotNetValidator
{
    public static partial class SanitizationUtility
    {
        /// <summary>
        /// A Sanitizer that removes all leading and trailing white-space characters 
        /// from the current validated property
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <typeparam name="T">The type of data model</typeparam>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel<T> Trim<T>(this ValidationModel<T> model)
        {
            try
            {
                model.SetValue(model.GetValue().ToString().Trim());
            }
            catch (Exception)
            {
            }
            return model;
        }

        /// <summary>
        /// A Sanitizer that removes all leading and trailing occurrences of a set of characters
        /// from the current validated property
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <typeparam name="T">The type of data model</typeparam>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="trimChars">The set of characters that will be trimmed</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel<T> Trim<T>(this ValidationModel<T> model, params char[] trimChars)
        {
            try
            {
                model.SetValue(model.GetValue().ToString().Trim(trimChars));
            }
            catch (Exception)
            {
            }
            return model;
        }
    }
}
