using DotNetValidator.Models.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DotNetValidator.Models.Errors
{
    /// <summary>
    /// A validation error that resulting from validating a given Property under a specific data model 
    /// against all validation roles associated with it
    /// <para>[FOR INTERNAL USE ONLY]</para> 
    /// </summary>
    public class ValidationError : IValidationError
    {
        private string PropertyName { get; set; }
        private List<string> Messages { get; set; }

        /// <summary>
        /// Creates a new validation error for the given PropertyName under the given validation model
        /// </summary>
        /// <param name="propertyName">string PropertyName for which the validation model was generated</param>
        public ValidationError(string propertyName)
        {
            PropertyName = propertyName;
            Messages = new List<string>();
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
        /// Gets the list of validation errors resulting from validating the current model's PropertyName
        /// against all the validation roles
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <returns>List of string validation error messages</returns>
        public List<string> GetMessages()
        {
            return Messages;
        }

        /// <summary>
        /// Adds a new validation errors message to the current model's Property
        /// <para>[FOR INTERNAL USE ONLY]</para>
        /// </summary>
        /// <param name="message">string validation error message</param>
        public void AddMessage(string message)
        {
            Messages.Add(message);
        }
    }
}
