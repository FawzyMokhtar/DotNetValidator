using System;
using System.Diagnostics;

namespace DotNetValidator.C.Test
{
    class Program
    {
        static void Mutate(Country c)
        {
            c.Name = c.Name.ToUpper();
        }
        static void Main(string[] args)
        {
        a:
            var c = new Country { Name = "fawzy mokhtar" };
            var z = c;
            Mutate(c);
            Console.WriteLine(z.Name);
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
                IPv4 = "99.48.227.227",
                IPv6 = "2001:0db8:0000:0000:0000:ff00:0042:7879",
                BookNumber = "007462542X",
                SerialNumber = "ISSN 0277-786X", // 0277-786X
                Location = "51.498134, -0.201755",
                MacAddress = "0c-8f-ff-4a-64-f7",
                Port = -1,
                PostalCode = "1234-56789",
                ProfileUrl = "https://www.fb.com/dev.fawzymokhtar",
                Id = "00000000-0000-0000-0000-000000000000",
                DateOfBirth = "1994-07-16",
                AvailableTime = "10:15",
                Custom = "Custom validator test",
            };

            Stopwatch sw = new Stopwatch();
            sw.Start();

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

            var validation9 = ValidationModel.Create(model, "IPv4")
                .IsIP(IPVersion.IPv4);

            var validation10 = ValidationModel.Create(model, "IPv6")
                .IsIP(IPVersion.IPv6);

            var validation11 = ValidationModel.Create(model, "BookNumber")
                .IsISBN();

            var validation12 = ValidationModel.Create(model, "SerialNumber")
                .IsISSN();

            var validation13 = ValidationModel.Create(model, "Location")
                .IsLatLang();

            var validation14 = ValidationModel.Create(model, "MacAddress")
                .IsMACAddress();

            var validation15 = ValidationModel.Create(model, "Port")
                .IsPort();

            var validation16 = ValidationModel.Create(model, "PostalCode")
                .IsPostalCode();

            var validation17 = ValidationModel.Create(model, "ProfileUrl")
                .IsUrl();

            var validation18 = ValidationModel.Create(model, "Id")
                .IsGuid();

            var validation19 = ValidationModel.Create(model, "DateOfBirth")
                .IsInRange(new DateTime(1990, 01, 01), new DateTime(2000, 01, 01));

            var validation20 = ValidationModel.Create(model, "AvailableTime")
                .IsInRange(new TimeSpan(08, 00, 00), new TimeSpan(23, 00, 00));

            var validation21 = ValidationModel.Create(model, "Custom")
                .CustomValidator((object value) => !(value.ToString().Length > 5)
                                 , "value is invalid during custom validator 1")
                .CustomValidator((string value) => !(value.ToString().Length > 5)
                                 , "value is invalid during custom validator 2")
                .CustomValidator((string value) => !(value.ToString().Length < 5)
                                 , "value is invalid during custom validator 3");

            var errors = ValidationResult.Validate(validation, validation2, validation3, validation4,
                validation5, validation6, validation7, validation8, validation9, validation10,
                validation11, validation12, validation13, validation14, validation15, validation16,
                validation17, validation18, validation19, validation20, validation21);

            sw.Stop();

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

            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("Took {0} Ms to validate models", Math.Floor(sw.Elapsed.TotalMilliseconds));
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
        public string IPv4 { get; set; }
        public string IPv6 { get; set; }
        public string BookNumber { get; set; }
        public string SerialNumber { get; set; }
        public string Location { get; set; }
        public string MacAddress { get; set; }
        public int Port { get; set; }
        public string PostalCode { get; set; }
        public string ProfileUrl { get; set; }
        public string Id { get; set; }
        public string DateOfBirth { get; set; }
        public string AvailableTime { get; set; }
        public string Custom { get; set; }
        public Country Country { get; set; }
    }

    class Country
    {
        public string Name { get; set; }
        public string Continent { get; set; }
    }
}
