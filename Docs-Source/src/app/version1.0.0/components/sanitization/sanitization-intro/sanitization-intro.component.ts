import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-sanitization-intro",
  templateUrl: "./sanitization-intro.component.html",
  styleUrls: ["./sanitization-intro.component.sass"]
})
export class SanitizationIntroComponent implements OnInit {

  versionId = "1.0.0";
  postId = "sanitization-introduction";

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
      .ToUpper()
      .MinLength(5, "Invalid person name.");

  var errors = validator.Validate();

  /*
     model.Name value will be \`JOHN SMITH\`
     because we used the sanitizer .ToUpper() which converts all letters to upper-case letters.
  */`;

  example2 = `
  var model = new Person
  {
      Name = "JOHN SMITH",
      Age = 25
  };

  var validator = Validator.Create(model, "Name")
      .ToLower()
      .MaxLength(20, "Invalid person name.");

  var errors = validator.Validate();

  /*
     model.Name value will be \`john smith\`
     because we used the sanitizer .ToLower() which converts all letters to lower-case letters.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
