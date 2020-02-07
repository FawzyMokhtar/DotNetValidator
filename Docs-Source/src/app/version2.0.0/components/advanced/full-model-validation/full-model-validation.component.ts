import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-full-model-validation",
  templateUrl: "./full-model-validation.component.html",
  styleUrls: ["./full-model-validation.component.sass"]
})
export class FullModelValidationComponent implements OnInit {

  versionId = "2.0.0";
  postId = "full-model-validation";

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

  example1 = `
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

  example2 = `
  var model = new Person
  {
      Name = "John Smith",
      Age = 18
  };

  var errors = ValidationResult.Validate(
            Validator.Create(model, "Name")
                     .MaxLength(5, "Invalid name length.")
            ,
            Validator.Create(model, "Age")
                     .Min(20, "Not allowed age.")
  );

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
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
