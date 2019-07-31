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
            var model = new Person
            {
                Name = "Fawzy Mokhtar",
                Age = 24,
                //CreditCard = "4012888888881881",
                CreditCard = "4 0 1 2 8 8 8 8 8 8 8 8 1 8 8 1",
                CV = "http://www.cv.com/cv.png.1",
                //CV = "http://www.cv.com",
                //CV= "cvs/cv.png",
                //CV = "C://cvs//cv.png",
                //Email= "test.best.com",
                Email = "test.nest@best.com",
                DomainName = "test.best.com",
            };

            var validation = ValidationModel.Create(model, "Name")
                .BlackList(new object[] { "Fawzy Mokhtar", "Zain Fawzy" }, "This value is in black-list")
                .MinLength(30)
                .MaxLength(10);

            var validation2 = ValidationModel.Create(model, "Age")
                .WhiteList(new object[] { 25, "30" }, "This value is not in white-list");

            var validation3 = ValidationModel.Create(model, "Name")
                .WhiteList(new object[] { "Fawzy", "Zain" }, "This value is not in white-list")
                .Contains("_")
                .Contains(null, "FOO", "BAR", "NAR")
                .IsAlphaNumeric()
                .IsAlpha()
                .Matches(@"*")
                .StartsWith("Z")
                .EndsWith("Test")
                .IsASCII()
                .IsBase64();

            var validation4 = ValidationModel.Create(model, "Country")
                .IsNotNull();

            var validation5 = ValidationModel.Create(model, "CreditCard")
                .IsCreditCard();

            var validation6 = ValidationModel.Create(model, "CV")
                .IsFileUri();

            var validation7 = ValidationModel.Create(model, "Email")
                .IsEmail();

            var validation8 = ValidationModel.Create(model, "DomainName")
                .IsFQDN();

            var errors = ValidationResult.Validate(validation, validation2, validation3, validation4, 
                validation5, validation6, validation7, validation8);
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

            //Console.WriteLine("=====================================================");

            //var validationResult = ValidationResult.Result(validation, validation2, validation3, validation4, 
            //    validation5, validation6);
            //if (validationResult != null)
            //{
            //    if (validationResult.Name != null)
            //    {
            //        Console.WriteLine("Name");
            //        foreach (var msg in validationResult.Name)
            //        {
            //            Console.WriteLine(msg);
            //        }
            //    }

            //    if (validationResult.Age != null)
            //    {
            //        Console.WriteLine("Age");
            //        foreach (var msg in validationResult.Age)
            //        {
            //            Console.WriteLine(msg);
            //        }
            //    }
            //    Console.WriteLine(JsonConvert.SerializeObject(validationResult));
            //}
            //Console.WriteLine(model.Name);
            Console.ReadKey();
            goto a;
        }
    }

    class Person
    {
        public string Name { get; set; }
        public int? Age { get; set; }
        public string CreditCard { get; set; }
        public string CV { get; set; }
        public string Email { get; set; }
        public string DomainName { get; set; }
        public Country Country { get; set; }
    }

    class Country
    {
        public string Name { get; set; }
        public string Continent { get; set; }
    }
}
