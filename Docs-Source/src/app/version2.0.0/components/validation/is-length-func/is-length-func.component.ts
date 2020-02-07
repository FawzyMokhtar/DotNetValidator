import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-length-func",
  templateUrl: "./is-length-func.component.html",
  styleUrls: ["./is-length-func.component.sass"]
})
export class IsLengthFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "is-length-func";

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
      Name = "John Smith"
  };

  var validator = Validator.Create(model, "Name")
      .IsLength(2, 5, "Invalid length.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "Name",
          ErrorMessages = [
            "Invalid length."
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
      .IsLength(2, 20, "Invalid length.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's name length is between 2 and 20 characters.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
