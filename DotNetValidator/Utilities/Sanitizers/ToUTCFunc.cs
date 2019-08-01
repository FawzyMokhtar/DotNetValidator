﻿using System;

namespace DotNetValidator
{
    public static partial class SanitizationUtility
    {
        /// <summary>
        /// A Sanitizer that converts the current Property value to a coordinate universal time DateTime
        /// <para>Supported Data Types : Strings, Dates</para>
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel ToUtc(this ValidationModel model)
        {
            try
            {
                model.SetValue(Convert.ToDateTime(model.GetValue().ToString()).ToUniversalTime());
            }
            catch (Exception)
            {
            }
            return model;
        }
    }
}