﻿using System;
using System.Text.RegularExpressions;
using System.Net;
using DotNetValidator.Models.Errors;
using System.Net.Sockets;

namespace DotNetValidator
{
    public static partial class ValidationUtility
    {
        /// <summary>
        /// Checks if the property's value is a valid ip address.
        /// <para>Supported Data Types: Strings.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator IsIP(this Validator validator, string errorMessage = null)
        {
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (!IPAddress.TryParse(value.ToString(), out var iPAddress))
                        validator.AddError(errorMessage ?? DefaultErrorMessages.IsIP());
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.IsIP());
            }
            return validator;
        }

        /// <summary>
        /// Checks if the property's value is a valid ip address for the given ip version.
        /// <para>Supported Data Types: Strings.</para>
        /// </summary>
        /// <param name="validator">The validator to add more validations or sanitization.</param>
        /// <param name="ipVersion">The version of the ip address.</param>
        /// <param name="errorMessage">An optional validation error message.</param>
        /// <returns>A Validator.</returns>
        public static Validator IsIP(this Validator validator, IPVersion ipVersion, string errorMessage = null)
        {
            var version = ipVersion == IPVersion.IPv4 ? "v4" : "v6";
            try
            {
                var value = validator.GetValue();
                if (!validator.IsOptional || value != null)
                {
                    if (
                        // is a valid ip address
                        !IPAddress.TryParse(value.ToString(), out var iPAddress)
                        ||
                        // is a valid ipv4 
                        (
                         ipVersion == IPVersion.IPv4
                                      && !Regex.IsMatch(value.ToString(),
                                                        @"^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}" +
                                                        @"([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"
                                                        , RegexOptions.IgnoreCase
                                                       )
                        )
                        ||
                        // is a valid ipv6
                        (
                         ipVersion == IPVersion.IPv6 && iPAddress.AddressFamily != AddressFamily.InterNetworkV6
                        )
                       )
                        validator.AddError(errorMessage ?? DefaultErrorMessages.IsIP(version));
                }
            }
            catch (Exception)
            {
                validator.AddError(errorMessage ?? DefaultErrorMessages.IsIP(version));
            }
            return validator;
        }
    }
}
