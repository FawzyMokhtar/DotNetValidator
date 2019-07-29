using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DotNetValidator.Models.Abstractions
{
    /// <summary>
    /// A validation model that holds all of validation errors for a given Property under a specific data model 
    /// against all validation roles associated with it
    /// <para>[FOR INTERNAL USE ONLY]</para>
    /// </summary>
    /// <typeparam name="T">The data model of type T</typeparam>
    public interface IValidationModel<T>
    {
        /// <summary>
        /// Gets the Data of type T associated with this instance
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <returns><typeparam>T</typeparam> Data model</returns>
        T GetData();

        /// <summary>
        /// Gets the PropertyName for which the validation model was generated
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <returns>string PropertyName</returns>
        string GetPropertyName();

        /// <summary>
        /// The list of validation errors that resulting from validating the current model's PropertyName
        /// against all the validation roles
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <returns>List of validation errors</returns>
        List<IValidationError> GetErrors();

        /// <summary>
        /// Adds a new validation error message to the list of validation errors for the current validated
        /// Property
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <param name="message">string validation error message</param>
        void AddError(string message);

        /// <summary>
        /// Gets the value of the current validated Property under the data model
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <returns>object Property value</returns>
        object GetValue();

        /// <summary>
        /// Sets the value of the current validated Property under the data model
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <param name="value">object new Property value</param>
        void SetValue(object value);
    }
}
