using DotNetValidator.Helpers;
using System;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Creates a custom validation method that accepts an object value and 
        /// returns true if there is no validation error, otherwise false
        /// <para>Any mutation to the value will not affect the original value</para>
        /// </summary>
        /// <param name="model">The validator model to add more validations or sanitization</param>
        /// <param name="customValidator">A custom validator that accepts an object value and 
        /// returns true if there is no validation error, otherwise false</param>
        /// <returns>A Validator</returns>
        public static Validator CustomValidator(this Validator model, Func<object, bool> customValidator,
            string errorMessage)
        {
            try
            {
                // pass a deep clone copy to avoid data mutation
                if(!customValidator(Serializer.Deserialize<object>(Serializer.Serialize(model.GetValue()))))
                    model.AddError(errorMessage);
            }
            catch (Exception)
            {
                model.AddError(errorMessage);
            }
            return model;
        }

        /// <summary>
        /// Creates a custom validation method that accepts a TSource value and 
        /// returns true if there is no validation error, otherwise false
        /// <para>Any mutation to the value will not affect the original value</para>
        /// </summary>
        /// <typeparam name="TSource">The actual type of property</typeparam>
        /// <param name="model">The validator model to add more validations or sanitization</param>
        /// <param name="customValidator">A custom validator that accepts an object value and 
        /// returns true if there is no validation error, otherwise false</param>
        /// <returns>A Validator</returns>
        public static Validator CustomValidator<TSource>(this Validator model, 
            Func<TSource, bool> customValidator, string errorMessage)
        {
            try
            {
                // pass a deep clone copy to avoid data mutation
                if (!customValidator(Serializer.Deserialize<TSource>(Serializer.Serialize(model.GetValue()))))
                    model.AddError(errorMessage);
            }
            catch (Exception)
            {
                model.AddError(errorMessage);
            }
            return model;
        }
    }
}
