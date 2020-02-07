import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-isrc-func",
  templateUrl: "./is-isrc-func.component.html",
  styleUrls: ["./is-isrc-func.component.sass"]
})
export class IsIsrcFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "is-isrc-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public string SongRecordingCode { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith",
      SongRecordingCode = "123456"
  };

  var validator = Validator.Create(model, "SongRecordingCode")
      .IsISRC("Invalid song recording code.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "SongRecordingCode",
          ErrorMessages = [
            "Invalid song recording code."
          ]
        }
     ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith",
      SongRecordingCode = "GB-LFP-16-12345"
  };

  var validator = Validator.Create(model, "SongRecordingCode")
      .IsISRC("Invalid song recording code.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's song record code is a valid international standard recording code (ISRC).
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
