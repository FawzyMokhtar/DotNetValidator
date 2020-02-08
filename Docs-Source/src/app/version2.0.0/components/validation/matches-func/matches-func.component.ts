import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-matches-func",
  templateUrl: "./matches-func.component.html",
  styleUrls: ["./matches-func.component.sass"]
})
export class MatchesFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "matches-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "john smith"
  };

  var validator = Validator.Create(model, "Name")
      .Matches("^[A-Z]", "Invalid name.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "Name",
          ErrorMessages = [
            "Invalid name."
          ]
        }
     ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith"
  };

  var validator = Validator.Create(model, "Name")
      .Matches("^[A-Z]", "Invalid name.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's name matches the given pattern.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
