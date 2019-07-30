using DotNetValidator.Models.Errors;
using DotNetValidator.Models.Validators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace DotNetValidator.Models.Sanitizers
{
    /// <summary>
    /// A sanitizer model that holds all of validation errors for a given Property under a specific data model 
    /// against all validation roles associated with it 
    /// and could be used to change the current value of the underlying Property in the current data model
    /// <para>[FOR INTERNAL USE ONLY]</para>
    /// </summary>
    /// <typeparam name="T">The data model of type T</typeparam>
    public class SanitizerModel<T>
    {
        private T Data { get; set; }
        private string PropertyName { get; set; }
        private List<ValidationError> Errors { get; set; }

        /// <summary>
        /// Creates a new Sanitizer model that can be used to modify the current Property value 
        /// using some utility methods, this Sanitizer model will be initialized from the given Validation model
        /// </summary>
        /// <param name="model">ValidationModel model to initialize the new Sanitizer model</param>
        internal SanitizerModel(ValidationModel<T> model)
        {
            Data = model.GetData();
            PropertyName = model.GetPropertyName();
            Errors = model.GetErrors();
        }

        /// <summary>
        /// Creates a new Sanitizer model that can be used to modify the current Property value 
        /// using some utility methods, this Sanitizer model will be initialized from the given Sanitizer model
        /// </summary>
        /// <param name="model">SanitizerModel model to initialize the new Sanitizer model</param>
        internal SanitizerModel(SanitizerModel<T> model)
        {
            Data = model.GetData();
            PropertyName = model.GetPropertyName();
            Errors = model.GetErrors();
        }

        /// <summary>
        /// Gets the Data of type T associated with this instance
        /// </summary>
        /// <returns><typeparam>T</typeparam> Data model</returns>
        internal T GetData()
        {
            return Data;
        }

        /// <summary>
        /// Gets the PropertyName for which the validation model was generated
        /// </summary>
        /// <returns>string PropertyName</returns>
        internal string GetPropertyName()
        {
            return PropertyName;
        }

        /// <summary>
        /// The list of validation errors that resulting from validating the current model's PropertyName
        /// against all the validation roles
        /// </summary>
        /// <returns>List of validation errors</returns>
        internal List<ValidationError> GetErrors()
        {
            return Errors;
        }

        /// <summary>
        /// Gets the value of the current validated Property under the data model
        /// </summary>
        /// <returns>object Property value</returns>
        internal object GetValue()
        {
            PropertyInfo property = typeof(T).GetProperty(PropertyName);
            return property != null ? property.GetValue(Data, null) : null;
        }

        /// <summary>
        /// Sets the value of the current validated Property under the data model
        /// </summary>
        /// <param name="value">object new Property value</param>
        internal void SetValue(object value)
        {
            PropertyInfo property = typeof(T).GetProperty(PropertyName);
            if (property != null)
            {
                property.SetValue(Data, value, null);
            }
        }
    }
}
