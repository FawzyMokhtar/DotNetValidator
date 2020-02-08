import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-trim-func",
  templateUrl: "./trim-func.component.html",
  styleUrls: ["./trim-func.component.sass"]
})
export class TrimFuncComponent implements OnInit {

  versionId = "1.0.0";
  postId = "trim-func";

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
      Name = "   John Smith    "
  };

  var validator = Validator.Create(model, "Name")
      .Trim()
      .MaxLength(20, "Invalid name.");

  var errors = validator.Validate();

  /*
     model.Name will be \`John Smith\`
     because we use the .Trim() sanitizer.
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith"
  };

  var validator = Validator.Create(model, "Name")
      .Trim('J', 'o', 'h', 'n', ' ')
      .MaxLength(20, "Invalid name.");

  var errors = validator.Validate();

  /*
     model.Name will be \`Smith\`
     because we use the .Trim() sanitizer with the word \`John\` & an additional white-space.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
