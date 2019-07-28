using DotNetValidator.Models.Abstractions;
using DotNetValidator.Models.Sanitizers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DotNetValidator.Models.Validators
{
    public class ValidationModel<T> : IValidationModel<T>
    {
        public ValidationModel(T data, string propertyName)
        {
            Data = data;
            PropertyName = propertyName;
        }

        public ValidationModel(SanitizerModel<T> model)
        {
            Data = model.Data;
            Errors = model.Errors;
        }

        public T Data { get; set; }
        public string PropertyName { get; set; }
        public List<IValidationError> Errors { get; set; }
    }
}
