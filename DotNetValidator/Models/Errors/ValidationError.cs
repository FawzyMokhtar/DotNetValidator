using System.Collections.Generic;

namespace DotNetValidator
{
    /// <summary>
    /// A validation error that resulting from validating a given Property under a specific data model 
    /// against all validation roles associated with it
    /// </summary>
    public class ValidationError
    {
        private string _PropertyName { get; set; }
        private List<string> _ErrorMessages { get; set; }

        /// <summary>
        /// Creates a new validation error for the given PropertyName and the list of validation error messages
        /// </summary>
        /// <param name="propertyName">string PropertyName for which the validator model was generated</param>
        /// <param name="errorMessages">The list of validation error messages</param>
        internal ValidationError(string propertyName, List<string> errorMessages)
        {
            _PropertyName = propertyName;
            _ErrorMessages = errorMessages;
        }

        /// <summary>
        /// Gets the PropertyName for which the validator model was generated
        /// </summary>
        /// <returns>string PropertyName</returns>
        public string PropertyName
        {
            get { return _PropertyName; }
        }

        /// <summary>
        /// Gets the list of validation error messages resulting from validating the current model's PropertyName
        /// against all the validation roles
        /// </summary>
        /// <returns>List of string validation error messages</returns>
        public List<string> ErrorMessages
        {
            get { return _ErrorMessages; }
        }

        /// <summary>
        /// Adds new validation error messages to the list of validation errors for the current validated
        /// Property
        /// </summary>
        /// <param name="messages">A set of validation error message</param>
        internal void AddErrorMessages(params string[] messages)
        {
            _ErrorMessages.AddRange(messages);
        }
    }
}
