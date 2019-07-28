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
        public static SanitizerModel<T> BeginSanitize<T>(this ValidationModel<T> model)
        {
            return new SanitizerModel<T>(model);
        }
    }
}
