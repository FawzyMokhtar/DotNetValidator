using DotNetValidator.Models.Abstractions;
using DotNetValidator.Models.Errors;
using DotNetValidator.Models.Sanitizers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace DotNetValidator.Models.Validators
{
    /// <summary>
    /// A validation model that holds all of validation errors for a given Property under a specific data model 
    /// against all validation roles associated with it
    /// <para>[FOR INTERNAL USE ONLY]</para>
    /// </summary>
    /// <typeparam name="T">The data model of type T</typeparam>
    public class ValidationModel<T> : IValidationModel<T>
    {
        private T Data { get; set; }
        private string PropertyName { get; set; }
        private List<IValidationError> Errors { get; set; }

        /// <summary>
        /// Creates a new Validation model that can be used to validate the given Property value
        /// using some validation utility methods in the given data model
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <param name="data">The data model of type T</param>
        /// <param name="propertyName">The property name to be validated</param>
        internal ValidationModel(T data, string propertyName)
        {
            Data = data;
            PropertyName = propertyName;
            Errors = new List<IValidationError>();
        }

        /// <summary>
        /// Creates a new Validation model that can be used to validate the current Property value 
        /// using some validation utility methods, this Validation model will be initialized from the given Sanitizer model
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <param name="model">SanitizerModel model to initialize the new Validation model</param>
        internal ValidationModel(SanitizerModel<T> model)
        {
            Data = model.GetData();
            PropertyName = model.GetPropertyName();
            Errors = model.GetErrors();
        }

        /// <summary>
        /// Creates a new Validation model that can be used to validate the given Property value
        /// using some validation utility methods under the given data model
        /// </summary>
        /// <param name="data">The data model of type T</param>
        /// <param name="propertyName">The property name to be validated</param>
        /// <returns>A new instance of validation model for the given Property under the given data model</returns>
        public static ValidationModel<T> Create(T data, string propertyName)
        {
            return new ValidationModel<T>(data, propertyName);
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
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <param name="message">string validation error message</param>
        public void AddError(string message)
        {
            if (Errors.Count != 0)
                Errors.ElementAt(0).AddMessage(message);
            else
            {
                var error = new ValidationError(PropertyName);
                error.AddMessage(message);
                Errors.Add(error);
            }
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
        /// <para>[Validator doesn't have implementation for this functionality]</para>
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <param name="value">object new Property value</param>
        public void SetValue(object value)
        {
            throw new NotImplementedException();
        }
    }
}
