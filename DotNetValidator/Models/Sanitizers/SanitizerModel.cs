using DotNetValidator.Models.Abstractions;
using DotNetValidator.Models.Validators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace DotNetValidator.Models.Sanitizers
{
    public class SanitizerModel<T> : IValidationModel<T>
    {
        public SanitizerModel(ValidationModel<T> model)
        {
            Data = model.Data;
            PropertyName = model.PropertyName;
            Errors = model.Errors;
        }

        public SanitizerModel(SanitizerModel<T> model)
        {
            Data = model.Data;
            PropertyName = model.PropertyName;
            Errors = model.Errors;
        }

        public T Data { get; set; }
        public string PropertyName { get; set; }
        public List<IValidationError> Errors { get; set; }

        public object GetValue()
        {
            PropertyInfo property = typeof(T).GetProperty(PropertyName);
            return property != null ? property.GetValue(Data, null) : null;
        }

        public void SetValue(object value)
        {
            PropertyInfo property = typeof(T).GetProperty(PropertyName);
            if (property != null)
            {
                property.SetValue(Data, value, null);
            }
        }
    }
}
