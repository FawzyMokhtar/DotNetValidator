using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DotNetValidator.Models.Abstractions
{
    /// <summary>
    /// A validation error that resulting from validating a given Property under a specific data model 
    /// against all validation roles associated with it
    /// <para>[FOR INTERNAL USE ONLY]</para> 
    /// </summary>
    public interface IValidationError
    {
        /// <summary>
        /// Gets the PropertyName for which the validation model was generated
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <returns>string PropertyName</returns>
        string GetPropertyName();

        /// <summary>
        /// Gets the list of validation errors resulting from validating the current model's PropertyName
        /// against all the validation roles
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <returns>List of string validation error messages</returns>
        List<string> GetMessages();

        /// <summary>
        /// Adds a new validation errors message to the current model's Property
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <param name="message">string validation error message</param>
        void AddMessage(string message);
    }
}
