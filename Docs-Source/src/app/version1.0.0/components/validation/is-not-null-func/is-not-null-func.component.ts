import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-not-null-func",
  templateUrl: "./is-not-null-func.component.html",
  styleUrls: ["./is-not-null-func.component.sass"]
})
export class IsNotNullFuncComponent implements OnInit {

  versionId = "1.0.0";
  postId = "is-not-null-func";

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
      Name = null
  };

  var validator = Validator.Create(model, "Name")
      .IsNotNull("Name can't be null.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "Name",
          ErrorMessages = [
            "Name can't be null."
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
      .IsNotNull("Name can't be null.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's name is not null.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
