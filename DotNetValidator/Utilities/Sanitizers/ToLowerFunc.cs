﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DotNetValidator
{
    public static partial class SanitizationUtility
    {
        /// <summary>
        /// A Sanitizer that modifies the current Property value with a new lowercase copy
        /// <para>Supported Data Types : Strings</para>
        /// </summary>
        /// <typeparam name="T">The type of data model</typeparam>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel<T> ToLower<T>(this ValidationModel<T> model)
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
