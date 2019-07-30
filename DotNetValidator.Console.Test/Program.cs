﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DotNetValidator;

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
                //.CustomSanitizer((object value) => value.ToString().ToLower());
                .CustomSanitizer((string value) => value.ToLower());
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
