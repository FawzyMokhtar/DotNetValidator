import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-base64-func",
  templateUrl: "./is-base64-func.component.html",
  styleUrls: ["./is-base64-func.component.sass"]
})
export class IsBase64FuncComponent implements OnInit {
  versionId = "2.0.0";
  postId = "is-base64-func";

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
      Avatar = "An invalid base-64 string"
  };

  var validator = Validator.Create(model, "Avatar")
      .IsBase64("Invalid avatar.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "Avatar",
          ErrorMessages = [
            "Invalid avatar."
          ]
        }
      ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith",
      Avatar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACmYAAAn/CAYAAAB0gb6+.."
  };

  var validator = Validator.Create(model, "Avatar")
      .IsBase64("Invalid avatar.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's avatar is a valid base-64 file string.
  */`;

  example3 = `
  var model = new Person
  {
      Name = "John Smith",
      Avatar = "iVBORw0KGgoAAAANSUhEUgAACmYAAAn/CAYAAAB0gb6+.."
  };

  var validator = Validator.Create(model, "Avatar")
      .IsBase64("Invalid avatar.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's avatar is a valid base-64 string.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
