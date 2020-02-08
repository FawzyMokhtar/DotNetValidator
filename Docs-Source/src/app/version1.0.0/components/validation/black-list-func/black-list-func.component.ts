import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-black-list-func",
  templateUrl: "./black-list-func.component.html",
  styleUrls: ["./black-list-func.component.sass"]
})
export class BlackListFuncComponent implements OnInit {

  versionId = "1.0.0";
  postId = "black-list-func";

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

  personObj1 = `
  var data = new Person
  {
      Name = "John Smith",
      Age = 17
  };`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith",
      Age = 25
  };

  var validator = Validator.Create(model, "Name")
      .BlackList(new [] { "JohnSmith", "Harry Potter" }, "Invalid person name.");

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

  var validator = Validator.Create(model, "Age")
      .BlackList(new [] { 17, 18, 19 }, "Invalid person age.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's age is 25 and it is not in the black-list values.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
