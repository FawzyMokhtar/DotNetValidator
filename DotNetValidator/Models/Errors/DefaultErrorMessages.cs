using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DotNetValidator.Models.Errors
{
    internal static class DefaultErrorMessages
    {
        public static string BlackList
        {
            get
            {
                return "Value is not allowed";
            }
        }

        public static string WhiteList
        {
            get
            {
                return "Value is not allowed";
            }
        }

        public static string IsNotNull
        {
            get
            {
                return "Value can not be null";
            }
        }

        public static string IsLength(long minLength, long maxLength)
        {
            return $"The length should be between {minLength} and {maxLength} characters";
        }

        public static string MinLength(long minLength)
        {
            return $"The length should be at least {minLength} characters";
        }

        public static string MaxLength(long maxLength)
        {
            return $"The length should be at most {maxLength} characters";
        }

        public static string Contains(string str)
        {
            return $"Should contains the value {str}";
        }

        public static string Contains(params string[] strs)
        {
            var concatStr = "[";
            for (int i = 0; i < strs.Length; i++)
            {
                if (i == strs.Length - 1)
                    concatStr += strs[i];
                else
                    concatStr += $"{strs[i]}, ";
            }
            concatStr += "]";

            return $"Should contains at least one of the values {concatStr}";
        }
    }
}
