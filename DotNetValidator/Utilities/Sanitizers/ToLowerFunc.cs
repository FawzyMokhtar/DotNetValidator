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
