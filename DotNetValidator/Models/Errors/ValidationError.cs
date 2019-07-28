using DotNetValidator.Models.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DotNetValidator.Models.Errors
{
    public class ValidationError : IValidationError
    {
        public ValidationError()
        {
            _Messages = new List<string>();
        }

        private string _Path { get; set; }

        public string Path => _Path;

        public List<string> _Messages { get; set; }

        public List<string> Messages => _Messages;

        public void SetPath(string path)
        {
            _Path = path;
        }

        public void AddMessage(string message)
        {
            _Messages.Add(message);
        }
    }
}
