import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-getting-started",
  templateUrl: "./getting-started.component.html",
  styleUrls: ["./getting-started.component.sass"]
})
export class GettingStartedComponent implements OnInit {

  versionId = "2.0.0";
  postId = "getting-started";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public int Age { get; set; }
  }`;

  personObj1 = `
  var data = new Person
  {
      Name = "John Smith",
      Age = 17
  };`;

  usingLib = `
  using DotNetValidator;`;

  personValidate1 = `
  /*
    the static class Validator include a static method called
    create(object dataModel, string propertyName)
  */
  var validator = Validator.Create(data, "Age")
    /*
       Then we call a validation method called
       Min(double minValue, optional string errorMessage)
    */
   .Min(18, "Person age must be at least 18 years old.");

  /*
    call the Validate() method to get the validation errors
  */
  var errors = validator.Validate();`;

  personValidateWithError1 = `
  ${this.personObj1}

  var validator = Validator.Create(data, "Age")
   .Min(18, "Person age must be at least 18 years old.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
       {
          PropertyName = "Age",
          ErrorMessages = [
            "Person age must be at least 18 years old."
          ]
       }
     ]
  */`;

  personValidateResult1 = `
  var errors = validator.Result();

  /*
     errors value will be a dynamic object

     {
       Age = [
         "Person age must be at least 18 years old."
       ]
     }
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
