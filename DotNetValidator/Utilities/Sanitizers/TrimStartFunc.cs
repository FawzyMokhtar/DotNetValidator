using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DotNetValidator
{
    public static class TrimStartFunc
    {

        /// <summary>
        /// A Sanitizer that removes all leading occurrences of a set of characters
        /// from the current validated property
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <typeparam name="T">The type of data model</typeparam>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <param name="traimChars">The set of characters that will be trimmed</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel<T> TrimStart<T>(this ValidationModel<T> model, params char[] traimChars)
        {
            try
            {
                model.SetValue(model.GetValue().ToString().TrimStart(traimChars));
            }
            catch (Exception)
            {
            }
            return model;
        }
    }
}
