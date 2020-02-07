import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-custom-sanitizer-func",
  templateUrl: "./custom-sanitizer-func.component.html",
  styleUrls: ["./custom-sanitizer-func.component.sass"]
})
export class CustomSanitizerFuncComponent implements OnInit {

  versionId = "1.0.0";
  postId = "custom-sanitizer-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public Country Country { get; set; }
  }`;

  country1 = `
  public class Country
  {
      public string Name { get; set; }
      public string Code { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John smith",
      Country = new Country
      {
         Name = "United Kingdom",
         Code = "uk"
      }
  };

  var validator = Validator.Create(model, "Country")
      .CustomSanitizer(
        (Country country) => {
          country.Code.ToUpper();
          return country;
        }
      );

  var errors = validator.Validate();

  /*
     model.Country.Code will be \`UK\`
     because in the custom-sanitizer we convert the code property value to upper-case letters.
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John smith",
      Country = new Country
      {
         Name = "United Kingdom",
         Code = "uk"
      }
  };

  var validator = Validator.Create(model, "Country")
      .CustomSanitizer(
        (Country country) => {
          country.Name.ToLower();
          return country;
        }
      );

  var errors = validator.Validate();

  /*
     model.Country.Name will be \`united kingdom\`
     because in the custom-sanitizer we convert the code property value to lower-case letters.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }
}
