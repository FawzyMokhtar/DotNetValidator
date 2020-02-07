import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-custom-validator-func",
  templateUrl: "./custom-validator-func.component.html",
  styleUrls: ["./custom-validator-func.component.sass"]
})
export class CustomValidatorFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "custom-validator-func";

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
      Country = null
  };

  var validator = Validator.Create(model, "Country")
      .CustomValidator((object country) => country != null, "Country shouldn't be null.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "Country",
          ErrorMessages = [
            "Country shouldn't be null."
          ]
        }
     ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John smith",
      Country = new Country
      {
          Name = "United Kingdom",
          Code = "UK"
      }
  };

  var validator = Validator.Create(model, "Country")
      .CustomValidator((Country country) => country.Code != null, "Country code shouldn't be null.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's country code is not null.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }
}
