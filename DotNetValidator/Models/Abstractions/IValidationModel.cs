using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DotNetValidator.Models.Abstractions
{
    public interface IValidationModel<T>
    {
        T Data { get; set; }
        string PropertyName { get; set; }
        List<IValidationError> Errors { get; set; }
    }
}
