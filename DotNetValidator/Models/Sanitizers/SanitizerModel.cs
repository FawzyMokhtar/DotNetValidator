using DotNetValidator.Models.Abstractions;
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
    public class SanitizerModel<T> : IValidationModel<T>
    {
        private T Data { get; set; }
        private string PropertyName { get; set; }
        private List<IValidationError> Errors { get; set; }

        /// <summary>
        /// Creates a new Sanitizer model that can be used to modify the current Property value 
        /// using some utility methods, this Sanitizer model will be initialized from the given Validation model
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <param name="model">ValidationModel model to initialize the new Sanitizer model</param>
        public SanitizerModel(ValidationModel<T> model)
        {
            Data = model.GetData();
            PropertyName = model.GetPropertyName();
            Errors = model.GetErrors();
        }

        /// <summary>
        /// Creates a new Sanitizer model that can be used to modify the current Property value 
        /// using some utility methods, this Sanitizer model will be initialized from the given Sanitizer model
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <param name="model">SanitizerModel model to initialize the new Sanitizer model</param>
        public SanitizerModel(SanitizerModel<T> model)
        {
            Data = model.GetData();
            PropertyName = model.GetPropertyName();
            Errors = model.GetErrors();
        }

        /// <summary>
        /// Gets the Data of type T associated with this instance
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <returns><typeparam>T</typeparam> Data model</returns>
        public T GetData()
        {
            return Data;
        }

        /// <summary>
        /// Gets the PropertyName for which the validation model was generated
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <returns>string PropertyName</returns>
        public string GetPropertyName()
        {
            return PropertyName;
        }

        /// <summary>
        /// The list of validation errors that resulting from validating the current model's PropertyName
        /// against all the validation roles
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <returns>List of validation errors</returns>
        public List<IValidationError> GetErrors()
        {
            return Errors;
        }

        /// <summary>
        /// Adds a new validation error message to the list of validation errors for the current validated
        /// Property
        /// <para>[Sanitizer doesn't have implementation for this functionality]</para>
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <param name="message">string validation error message</param>
        public void AddError(string message)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Gets the value of the current validated Property under the data model
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <returns>object Property value</returns>
        public object GetValue()
        {
            PropertyInfo property = typeof(T).GetProperty(PropertyName);
            return property != null ? property.GetValue(Data, null) : null;
        }

        /// <summary>
        /// Sets the value of the current validated Property under the data model
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <param name="value">object new Property value</param>
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
