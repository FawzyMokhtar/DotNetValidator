import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-file-uri-func",
  templateUrl: "./is-file-uri-func.component.html",
  styleUrls: ["./is-file-uri-func.component.sass"]
})
export class IsFileUriFuncComponent implements OnInit {
  versionId = "1.0.0";
  postId = "is-file-uri-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public string Avatar { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith",
      Avatar = "example.com/avatar/john_smith.png"
  };

  var validator = Validator.Create(model, "Avatar")
      .IsFileUri("Invalid avatar url.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "Avatar",
          ErrorMessages = [
            "Invalid avatar url."
          ]
        }
      ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith",
      Avatar = "http://example.com/avatar/john_smith.png"
  };

  var validator = Validator.Create(model, "Avatar")
      .IsFileUri("Invalid avatar url.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's avatar url is valid.
  */`;

  example3 = `
  var model = new Person
  {
      Name = "John Smith",
      Avatar = "https://example.com/avatar/john_smith.png"
  };

  var validator = Validator.Create(model, "Avatar")
      .IsFileUri("Invalid avatar url.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's avatar url is valid.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
