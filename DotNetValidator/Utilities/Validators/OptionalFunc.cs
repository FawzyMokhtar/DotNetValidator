namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Skips all of the following validations if the property's value was null
        /// </summary>
        /// <param name="model">The validator model to add more validations or sanitization</param>
        /// <returns>A Validator</returns>
        public static Validator Optional(this Validator model)
        {
            model.IsOptional = true;
            return model;
        }
    }
}

