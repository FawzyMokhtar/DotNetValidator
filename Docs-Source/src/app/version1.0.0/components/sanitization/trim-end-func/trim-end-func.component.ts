import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-trim-end-func",
  templateUrl: "./trim-end-func.component.html",
  styleUrls: ["./trim-end-func.component.sass"]
})
export class TrimEndFuncComponent implements OnInit {

  versionId = "1.0.0";
  postId = "trim-end-func";

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
      Name = "John Smith    "
  };

  var validator = Validator.Create(model, "Name")
      .TrimEnd()
      .MaxLength(20, "Invalid name.");

  var errors = validator.Validate();

  /*
     model.Name will be \`John Smith\`
     because we use the .TrimEnd() sanitizer.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
