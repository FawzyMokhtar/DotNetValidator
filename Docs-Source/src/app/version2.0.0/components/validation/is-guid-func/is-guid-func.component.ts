import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-guid-func",
  templateUrl: "./is-guid-func.component.html",
  styleUrls: ["./is-guid-func.component.sass"]
})
export class IsGuidFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "is-guid-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public Guid Id { get; set; }
      public string Name { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Id = "0000-0000-0000-face",
      Name = "John Smith"
  };

  var validator = Validator.Create(model, "Id")
      .IsGuid("Invalid id.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "Id",
          ErrorMessages = [
            "Invalid id."
          ]
        }
     ]
  */`;

  example2 = `
  var model = new Person
  {
      Id = "2781553d-7299-48ec-8e3a-19dffd24b86f"
      Name = "John Smith"
  };

  var validator = Validator.Create(model, "Id")
      .IsGuid("Invalid id.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's id is a valid global unique identifier (Guid).
  */`;

  example3 = `
  var model = new Person
  {
      Id = "00000000-0000-0000-0000-000000000000"
      Name = "John Smith"
  };

  var validator = Validator.Create(model, "Id")
      .IsGuid(true, "Invalid id.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's id is an empty global unique identifier (Guid).
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
