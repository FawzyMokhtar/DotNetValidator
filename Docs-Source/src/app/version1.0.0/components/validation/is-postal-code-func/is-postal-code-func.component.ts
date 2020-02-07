import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-postal-code-func",
  templateUrl: "./is-postal-code-func.component.html",
  styleUrls: ["./is-postal-code-func.component.sass"]
})
export class IsPostalCodeFuncComponent implements OnInit {

  versionId = "1.0.0";
  postId = "is-postal-code-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public string PostalCode { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith",
      PostalCode = "A1234"
  };

  var validator = Validator.Create(model, "PostalCode")
      .IsPostalCode("Invalid postal code.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "PostalCode",
          ErrorMessages = [
            "Invalid postal code."
          ]
        }
      ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith",
      PostalCode = "12345-6789"
  };

  var validator = Validator.Create(model, "PostalCode")
      .IsPostalCode("Invalid postal code.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's postal code is a valid 9-digits postal code.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
