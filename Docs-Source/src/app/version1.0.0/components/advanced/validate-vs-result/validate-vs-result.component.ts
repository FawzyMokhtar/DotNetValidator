import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-validate-vs-result",
  templateUrl: "./validate-vs-result.component.html",
  styleUrls: ["./validate-vs-result.component.sass"]
})
export class ValidateVsResultComponent implements OnInit {

  versionId = "1.0.0";
  postId = "validate-vs-result";

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

  validate = `
  var model = new Person
  {
      Name = "John Smith",
      Age = 18
  };

  var nameValidator = Validator.Create(model, "Name")
      .MaxLength(5, "Invalid name length.");

  var ageValidator = Validator.Create(model, "Age")
      .Min(20, "Not allowed age.");

  var errors = ValidationResult.Validate(nameValidator, ageValidator);

  /*
     errors value will be a List<ValidationError>

     [
       {
        PropertyName = "Name",
        ErrorMessages = [
          "Invalid name length."
        ]
       },

       {
        PropertyName = "Age",
        ErrorMessages = [
          "Not allowed age."
        ]
       }
     ]
  */`;

  result = `
  var model = new Person
  {
      Name = "John Smith",
      Age = 18
  };

  var errors = ValidationResult.Result(
            Validator.Create(model, "Name")
                     .MaxLength(5, "Invalid name length.")
            ,
            Validator.Create(model, "Age")
                     .Min(20, "Not allowed age.")
  );

  /*
     errors value will be a dynamic object

     {
       Name = [
         "Invalid name length."
       ],

       Age = [
        "Not allowed age."
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
