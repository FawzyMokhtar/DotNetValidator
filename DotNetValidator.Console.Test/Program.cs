using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DotNetValidator;
using Newtonsoft.Json;

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
                Age = 24
            };

            var validation = ValidationModel<Player>.Create(model, "Name")
                .BlackList(new object[] { "Fawzy Mokhtar", "Zain Fawzy" }, "This value is in black-list");

            var validation2 = ValidationModel<Player>.Create(model, "Age")
                .WhiteList(new object[] { 25, "30" }, "This value is not in white-list");

            var validation3 = ValidationModel<Player>.Create(model, "Name")
                .WhiteList(new object[] { "Fawzy", "Zain" }, "This value is not in white-list");

            var errors = ValidationResult.Validate(validation, validation2, validation3);
            if (errors != null)
            {
                foreach (var error in errors)
                {
                    Console.WriteLine(error.PropertyName);
                    foreach (var msg in error.ErrorMessages)
                    {
                        Console.WriteLine(msg);
                    }
                }
            }

            Console.WriteLine("=====================================================");

            var validationResult = ValidationResult.Result(validation, validation2, validation3);
            if (validationResult != null)
            {
                if (validationResult.Name != null)
                {
                    Console.WriteLine("Name");
                    foreach (var msg in validationResult.Name)
                    {
                        Console.WriteLine(msg);
                    }
                }

                if (validationResult.Age != null)
                {
                    Console.WriteLine("Age");
                    foreach (var msg in validationResult.Age)
                    {
                        Console.WriteLine(msg);
                    }
                }
                Console.WriteLine(JsonConvert.SerializeObject(validationResult));
            }
            //Console.WriteLine(model.Name);
            Console.ReadKey();
            goto a;
        }
    }

    class Player
    {
        public string Name { get; set; }
        public int? Age { get; set; }
    }
}
