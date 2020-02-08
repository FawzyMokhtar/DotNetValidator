import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-url-func",
  templateUrl: "./is-url-func.component.html",
  styleUrls: ["./is-url-func.component.sass"]
})
export class IsUrlFuncComponent implements OnInit {

  versionId = "1.0.0";
  postId = "is-url-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public string LinkedInProfile { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith",
      LinkedInProfile = "john@smith.com"
  };

  var validator = Validator.Create(model, "LinkedInProfile")
      .IsUrl("Invalid url.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "LinkedInProfile",
          ErrorMessages = [
            "Invalid url."
          ]
        }
     ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith",
      LinkedInProfile = "https://www.linkedin.com/in/john-smith"
  };

  var validator = Validator.Create(model, "LinkedInProfile")
      .IsUrl("Invalid url.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's linked-in profile url is a valid url.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}

