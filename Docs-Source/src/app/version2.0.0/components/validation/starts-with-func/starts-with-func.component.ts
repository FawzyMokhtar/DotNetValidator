import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-starts-with-func",
  templateUrl: "./starts-with-func.component.html",
  styleUrls: ["./starts-with-func.component.sass"]
})
export class StartsWithFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "starts-with-func";

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
      Name = "John Smith",
      Age = 25
  };

  var validator = Validator.Create(model, "Name")
      .StartsWith("Harry", "Invalid person name.");

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
      Name = "John Smith",
      Age = 25
  };

  var validator = Validator.Create(model, "Name")
      .StartsWith("John", "Invalid person name.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's name starts with the string \`John\`.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}

