﻿using System.Collections.Generic;
using System.Reflection;

namespace DotNetValidator
{
    /// <summary>
    /// A validator that holds all of validation errors for a given Property under a specific data model 
    /// against all validation roles associated with it.
    /// </summary>
    public class Validator
    {
        private object Data { get; set; }
        private string PropertyName { get; set; }
        private List<string> Errors { get; set; }

        /// <summary>
        /// Gets or sets a value indicates whether this property could be null or not.
        /// </summary>
        internal bool IsOptional { get; set; }

        /// <summary>
        /// Creates a new validator that can be used to validate or sanitize the given Property value
        /// using some validations or sanitization utility methods in the given data model.
        /// </summary>
        /// <param name="data">The object data model to validate the given property.</param>
        /// <param name="propertyName">The property name to be validated.</param>
        internal Validator(object data, string propertyName)
        {
            Data = data;
            PropertyName = propertyName;
            Errors = new List<string>();
        }

        /// <summary>
        /// Creates a new validator that can be used to add more validations or sanitization to the current Property value 
        /// using some validation or sanitization utility methods, 
        /// this validator will be initialized from the given validator.
        /// </summary>
        /// <param name="validator">Validator to initialize the new validator.</param>
        internal Validator(Validator validator)
        {
            Data = validator.GetData();
            PropertyName = validator.GetPropertyName();
            Errors = validator.GetErrors();
        }

        /// <summary>
        /// Creates a new validator that can be used to validate or sanitize the given Property value
        /// using some validation or sanitization utility methods under the given data model.
        /// </summary>
        /// <param name="data">The data model of type object.</param>
        /// <param name="propertyName">The property name to be validated.</param>
        /// <returns>A new instance of validator for the given Property under the given data model.</returns>
        public static Validator Create(object data, string propertyName)
        {
            return new Validator(data, propertyName);
        }

        /// <summary>
        /// Gets the Data of type object associated with this instance.
        /// </summary>
        /// <returns>object data model.</returns>
        internal object GetData()
        {
            return Data;
        }

        /// <summary>
        /// Gets the PropertyName for which the validator was generated.
        /// </summary>
        /// <returns>string PropertyName.</returns>
        internal string GetPropertyName()
        {
            return PropertyName;
        }

        /// <summary>
        /// The list of validation error messages that resulting from validating the current model's PropertyName
        /// against all the validation roles.
        /// </summary>
        /// <returns>List of validation error messages.</returns>
        internal List<string> GetErrors()
        {
            return Errors;
        }

        /// <summary>
        /// Adds a new validation error message to the list of validation errors for the current validated
        /// Property.
        /// </summary>
        /// <param name="message">string validation error message.</param>
        internal void AddError(string message)
        {
            Errors.Add(message);
        }

        /// <summary>
        /// Gets the value of the current validated Property under the data model.
        /// </summary>
        /// <returns>object Property value.</returns>
        internal object GetValue()
        {
            PropertyInfo property = Data.GetType().GetProperty(PropertyName);
            return property != null ? property.GetValue(Data, null) : null;
        }

        /// <summary>
        /// Sets the value of the current validated Property under the data model.
        /// </summary>
        /// <param name="value">object new Property value.</param>
        internal void SetValue(object value)
        {
            PropertyInfo property = Data.GetType().GetProperty(PropertyName);
            if (property != null)
            {
                property.SetValue(Data, value, null);
            }
        }
    }
}
