import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-to-lower-func",
  templateUrl: "./to-lower-func.component.html",
  styleUrls: ["./to-lower-func.component.sass"]
})
export class ToLowerFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "to-lower-func";

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
      .ToLower()
      .MinLength(5, "Invalid name.");

  var errors = validator.Validate();

  /*
     model.Name will be \`john smith\`
     because we use the .ToLower() sanitizer.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
