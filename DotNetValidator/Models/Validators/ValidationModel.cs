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
    public class ValidationModel<T>
    {
        private T Data { get; set; }
        private string PropertyName { get; set; }
        private List<ValidationError> Errors { get; set; }

        /// <summary>
        /// Creates a new Validation model that can be used to validate the given Property value
        /// using some validation utility methods in the given data model
        /// </summary>
        /// <param name="data">The data model of type T</param>
        /// <param name="propertyName">The property name to be validated</param>
        internal ValidationModel(T data, string propertyName)
        {
            Data = data;
            PropertyName = propertyName;
            Errors = new List<ValidationError>();
        }

        /// <summary>
        /// Creates a new Validation model that can be used to validate the current Property value 
        /// using some validation utility methods, this Validation model will be initialized from the given Sanitizer model
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
        /// Adds a new validation error message to the list of validation errors for the current validated
        /// Property
        /// </summary>
        /// <param name="message">string validation error message</param>
        internal void AddError(string message)
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
        /// </summary>
        /// <returns>object Property value</returns>
        internal object GetValue()
        {
            PropertyInfo property = typeof(T).GetProperty(PropertyName);
            return property != null ? property.GetValue(Data, null) : null;
        }
    }
}
