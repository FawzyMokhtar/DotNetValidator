using System;

namespace DotNetValidator
{
    public static partial class SanitizationUtility
    {
        /// <summary>
        /// A Sanitizer that modifies the current Property value with a new lowercase copy
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <param name="model">The validator model to add more validations or sanitization</param>
        /// <returns>A Validator</returns>
        public static Validator ToLower(this Validator model)
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
