import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-email-func",
  templateUrl: "./is-email-func.component.html",
  styleUrls: ["./is-email-func.component.sass"]
})
export class IsEmailFuncComponent implements OnInit {
  versionId = "2.0.0";
  postId = "is-email-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public string Email { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith",
      Email = "john.example.com"
  };

  var validator = Validator.Create(model, "Email")
      .IsEmail("Invalid email.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "Email",
          ErrorMessages = [
            "Invalid email."
          ]
        }
      ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith",
      Email = "john@example.com"
  };

  var validator = Validator.Create(model, "Email")
      .IsEmail("Invalid email.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's email is valid.
  */`;

  example3 = `
  var model = new Person
  {
      Name = "John Smith",
      Email = "john.smith@example.com"
  };

  var validator = Validator.Create(model, "Email")
      .IsEmail("Invalid email.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's email is valid.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
