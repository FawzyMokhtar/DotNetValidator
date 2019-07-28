using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DotNetValidator.Models.Abstractions
{
    public interface IValidationError
    {
        string Path { get; }
        void SetPath(string path);

        List<string> Messages { get; }
        void AddMessage(string message);
    }
}
