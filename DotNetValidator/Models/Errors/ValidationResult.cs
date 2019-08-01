using System.Collections.Generic;
using System.Dynamic;
using System.Linq;

namespace DotNetValidator
{
    /// <summary>
    /// The DotNet Validator resolver
    /// </summary>
    public class ValidationResult
    {
        /// <summary>
        /// Validates the given set of Validators and returns a list of ValidationError if there is a validation
        /// role failed or returns null if all validation roles passed
        /// </summary>
        
        /// <param name="data">The data model of type T</param>
        /// <returns>A list of ValidationError or null</returns>
        public static List<ValidationError> Validate(params Validator[] models)
        {
            var rejectedModels = models.Where(model => model.GetErrors().Count != 0);
            if (rejectedModels.Count() != 0)
            {
                var errors = new List<ValidationError>();
                foreach (var model in rejectedModels)
                {
                    var error = errors.SingleOrDefault(err => err.PropertyName.Equals(model.GetPropertyName()));
                    if (error != null)
                        error.AddErrorMessages(model.GetErrors().Select(msg => msg).ToArray());
                    else
                        errors.Add(new ValidationError(model.GetPropertyName(), model.GetErrors().Select(msg => msg).ToList()));
                }
                return errors;
            }
            return null;
        }

        /// <summary>
        /// Validates the given set of Validators and returns a dynamic object that include all properties
        /// that didn't passed the validation roles
        /// <para>It's RECOMMENDED to use this method if you are using DotNet Validator in the back-end</para>
        /// </summary>
        
        /// <param name="data">The data model of type T</param>
        /// <returns>A list of ValidationError or null</returns>
        public static dynamic Result(params Validator[] models)
        {
            var errors = Validate(models);
            if (errors != null)
            {
                dynamic result = new ExpandoObject();
                foreach (var error in errors)
                {
                    AddProperty(result, error.PropertyName, error.ErrorMessages);
                }
                return result;
            }
            return null;
        }

        /// <summary>
        /// Adds a new property to an existing dynamic ExpandoObject
        /// </summary>
        /// <param name="expando">The dynamic object</param>
        /// <param name="propertyName">The name of the property to create</param>
        /// <param name="propertyValue">The value of the given created property</param>
        private static void AddProperty(ExpandoObject expando, string propertyName, object propertyValue)
        {
            // ExpandoObject supports IDictionary so we can extend it like this
            var expandoDict = expando as IDictionary<string, object>;
            if (expandoDict.ContainsKey(propertyName))
                expandoDict[propertyName] = propertyValue;
            else
                expandoDict.Add(propertyName, propertyValue);
        }
    }
}
