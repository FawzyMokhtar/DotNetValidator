import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-to-utc-func",
  templateUrl: "./to-utc-func.component.html",
  styleUrls: ["./to-utc-func.component.sass"]
})
export class ToUtcFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "to-utc-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public DateTime SignUpDate { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith",
      SignUpDate = new DateTime(2019, 07, 16, 10, 00, 00)
  };

  var validator = Validator.Create(model, "SignUpDate")
      .ToUtc();

  var errors = validator.Validate();

  /*
     model.SignUpDate will be \`2019-07-16 08:00:00\`
     because we use the .ToUtc() sanitizer.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}

