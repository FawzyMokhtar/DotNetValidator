import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-ascii-func",
  templateUrl: "./is-ascii-func.component.html",
  styleUrls: ["./is-ascii-func.component.sass"]
})
export class IsAsciiFuncComponent implements OnInit {
  versionId = "2.0.0";
  postId = "is-ascii-func";

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
      Name = "ǰohn Ŝmith",
      Age = 25
  };

  var validator = Validator.Create(model, "Name")
      .IsASCII("Invalid person name.");

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
      Name = "John_Smith",
      Age = 25
  };

  var validator = Validator.Create(model, "Name")
      .IsASCII("Invalid person name.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's name contains ascii characters only.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
