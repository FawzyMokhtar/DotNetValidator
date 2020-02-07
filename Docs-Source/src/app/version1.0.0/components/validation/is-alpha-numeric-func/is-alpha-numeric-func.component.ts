import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-alpha-numeric-func",
  templateUrl: "./is-alpha-numeric-func.component.html",
  styleUrls: ["./is-alpha-numeric-func.component.sass"]
})
export class IsAlphaNumericFuncComponent implements OnInit {
  versionId = "1.0.0";
  postId = "is-alpha-numeric-func";

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
      Name = "John_Smith",
      Age = 25
  };

  var validator = Validator.Create(model, "Name")
      .IsAlpha("Invalid person name.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "Name",
          ErrorMessages = [
            "Invalid person name."
          ]
        }
     ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "JohnSmith100",
      Age = 25
  };

  var validator = Validator.Create(model, "Name")
      .IsAlpha("Invalid person name.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's name contains alphabetical & numeric characters only.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
