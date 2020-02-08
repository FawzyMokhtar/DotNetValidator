import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-contains-func",
  templateUrl: "./contains-func.component.html",
  styleUrls: ["./contains-func.component.sass"]
})
export class ContainsFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "contains-func";

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
      Name = "Mister John smith",
      Age = 25
  };

  var validator = Validator.Create(model, "Name")
      .Contains("Mr", "Invalid person name.");

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
      Name = "Mister John Smith",
      Age = 25
  };

  var validator = Validator.Create(model, "Name")
      .Contains(new [] { "Mister", "Mr", "Missis", "Mrs" }, "Invalid person Name.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's name contains the value \`Mister\`.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
