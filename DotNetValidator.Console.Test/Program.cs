using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DotNetValidator;
using DotNetValidator.Models.Validators;

namespace DotNetValidator.C.Test
{
    class Program
    {
        static void Main(string[] args)
        {
            a:
            var model = new Player
            {
                Name = "Fawzy Mokhtar",
                Age = 25
            };
            
            var validation = ValidationModel<Player>.Create(model, "Name")
                .BeginSanitize()
                .ToLower()
                .EndSanitize();
            Console.WriteLine(model.Name);
            Console.ReadKey();
            goto a;
        }
    }

    class Player
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }
}
