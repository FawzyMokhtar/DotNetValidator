namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Skips all of the following validations if the property's value was null
        /// </summary>
        /// <param name="model">The validation model to add more validations or sanitization</param>
        /// <returns>A ValidationModel</returns>
        public static ValidationModel Optional(this ValidationModel model)
        {
            model.IsOptional = true;
            return model;
        }
    }
}

