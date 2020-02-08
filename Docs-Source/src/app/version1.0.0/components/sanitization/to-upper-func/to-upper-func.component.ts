import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-to-upper-func",
  templateUrl: "./to-upper-func.component.html",
  styleUrls: ["./to-upper-func.component.sass"]
})
export class ToUpperFuncComponent implements OnInit {

  versionId = "1.0.0";
  postId = "to-upper-func";

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
      .ToUpper()
      .MinLength(5, "Invalid name.");

  var errors = validator.Validate();

  /*
     model.Name will be \`JOHN SMITH\`
     because we use the .ToUpper() sanitizer.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
