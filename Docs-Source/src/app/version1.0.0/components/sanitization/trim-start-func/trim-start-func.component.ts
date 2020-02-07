import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-trim-start-func",
  templateUrl: "./trim-start-func.component.html",
  styleUrls: ["./trim-start-func.component.sass"]
})
export class TrimStartFuncComponent implements OnInit {

  versionId = "1.0.0";
  postId = "trim-start-func";

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
      Name = "   John Smith"
  };

  var validator = Validator.Create(model, "Name")
      .TrimStart()
      .MaxLength(20, "Invalid name.");

  var errors = validator.Validate();

  /*
     model.Name will be \`John Smith\`
     because we use the .TrimStart() sanitizer.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
