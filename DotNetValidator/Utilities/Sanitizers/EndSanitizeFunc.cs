using DotNetValidator.Models.Sanitizers;
using DotNetValidator.Models.Validators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DotNetValidator
{
    public static class EndSanitizeFunc
    {
        public static ValidationModel<T> EndSanitize<T>(this SanitizerModel<T>  model)
        {
            return new ValidationModel<T>(model);
        }
    }
}
