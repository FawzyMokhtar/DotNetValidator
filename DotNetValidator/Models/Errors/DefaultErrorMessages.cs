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

        public static string IsAlphaNumeric
        {
            get
            {
                return "Value is not an alphanumeric string";
            }
        }

        public static string IsAlpha
        {
            get
            {
                return "Value is not an alphabetical string";
            }
        }

        public static string IsASCII
        {
            get
            {
                return "Value is not an ASCII";
            }
        }

        public static string IsBase64
        {
            get
            {
                return "Value is not a valid base64";
            }
        }

        public static string IsCreditCard
        {
            get
            {
                return "Value is not a valid credit card number";
            }
        }

        public static string IsFileUri
        {
            get
            {
                return "Value is not a valid file uri over the network (http, https)";
            }
        }

        public static string IsEmail
        {
            get
            {
                return "Value is not a valid email";
            }
        }

        public static string IsFQDN
        {
            get
            {
                return "Value is not a fully qualified domain name";
            }
        }

        public static string IsISBN
        {
            get
            {
                return "Value is not a valid international standard book number";
            }
        }

        public static string IsISRC
        {
            get
            {
                return "Value is not a valid international standard recording code";
            }
        }

        public static string IsISSN
        {
            get
            {
                return "Value is not a valid international standard serial number";
            }
        }

        public static string IsLatLang
        {
            get
            {
                return "Value is not a valid gps coordinates, latitude and longitude";
            }
        }

        public static string IsMACAddress
        {
            get
            {
                return "Value is not a valid machine address";
            }
        }

        public static string IsPort
        {
            get
            {
                return "Value is not a valid port number";
            }
        }

        public static string IsPostalCode
        {
            get
            {
                return "Value is not a valid postal code";
            }
        }

        public static string IsUrl
        {
            get
            {
                return "Value is not a valid url";
            }
        }

        public static string IsGuid
        {
            get
            {
                return "Value is not a valid guid";
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

        public static string Matches(string pattern)
        {
            return $"Does not match the pattern {pattern}";
        }

        public static string StartsWith(string str)
        {
            return $"Should starts with the value {str}";
        }

        public static string EndsWith(string str)
        {
            return $"Should ends with the value {str}";
        }

        public static string IsIP()
        {
            return "Value is not a valid ip address";
        }

        public static string IsIP(string ipVersion)
        {
            return $"Value is not a valid ip {ipVersion} address";
        }

        public static string IsInRange(double minValue, double maxValue)
        {
            return $"The value should be between {minValue} and {maxValue}";
        }

        public static string IsInRange(DateTime minDateTime, DateTime maxDateTime)
        {
            return $"The value should be between {minDateTime.ToString()} and {maxDateTime.ToString()}";
        }

        public static string IsInRange(TimeSpan minTime, TimeSpan maxTime)
        {
            return $"The value should be between {minTime.ToString()} and {maxTime.ToString()}";
        }

        public static string Min(double minValue)
        {
            return $"The value should be at least {minValue}";
        }

        public static string Min(DateTime minDateTime)
        {
            return $"The value should be at least {minDateTime.ToString()}";
        }

        public static string Min(TimeSpan minTime)
        {
            return $"The value should be at least {minTime.ToString()}";
        }

        public static string Max(double maxValue)
        {
            return $"The value should be at most {maxValue}";
        }

        public static string Max(DateTime maxDateTime)
        {
            return $"The value should be at most {maxDateTime.ToString()}";
        }

        public static string Max(TimeSpan maxTime)
        {
            return $"The value should be at most {maxTime.ToString()}";
        }
    }
}
