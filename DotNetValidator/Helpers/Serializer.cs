using Newtonsoft.Json;
using System;

namespace DotNetValidator.Helpers
{
    /// <summary>
    /// Json Serializer Helper
    /// </summary>
    internal static class Serializer
    {
        /// <summary>
        /// Serializes an object into string json
        /// </summary>
        /// <typeparam name="TSource">the type of the object</typeparam>
        /// <param name="obj">the object to serialize</param>
        /// <returns></returns>
        public static string Serialize<TSource>(TSource obj)
        {
            string result = string.Empty;
            try
            {
                result = JsonConvert.SerializeObject(obj);
            }
            catch (Exception)
            {
                result = null;
            }
            return result;
        }

        /// <summary>
        /// Deserialize a string json formate to an object
        /// </summary>
        /// <typeparam name="TSource">the type of the serialized object</typeparam>
        /// <param name="json">string json formate to be serialized</param>
        /// <returns></returns>
        public static TSource Deserialize<TSource>(string json)
        {
            TSource obj = default(TSource);
            try
            {
                obj = JsonConvert.DeserializeObject<TSource>(json);
            }
            catch (Exception)
            {
                obj = default(TSource);
            }
            return obj;
        }

        /// <summary>
        /// Changes object from type to another type
        /// </summary>
        /// <typeparam name="TSource">the source type of the object</typeparam>
        /// <typeparam name="TNew">the new object type</typeparam>
        /// <param name="source">the object that type will be changed</param>
        /// <returns></returns>
        public static TNew ChangeType<TSource, TNew>(TSource source)
        {
            TNew result = default(TNew);

            try
            {
                result = JsonConvert.DeserializeObject<TNew>(JsonConvert.SerializeObject(source));
            }
            catch (Exception)
            {
                result = default(TNew);
            }
            return result;
        }
    }
}
