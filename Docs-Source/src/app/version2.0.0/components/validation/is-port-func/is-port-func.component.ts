import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-port-func",
  templateUrl: "./is-port-func.component.html",
  styleUrls: ["./is-port-func.component.sass"]
})
export class IsPortFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "is-port-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public string DefaultPort { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith",
      DefaultPort = 90000
  };

  var validator = Validator.Create(model, "DefaultPort")
      .IsPort("Invalid port number.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "DefaultPort",
          ErrorMessages = [
            "Invalid port number."
          ]
        }
     ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith",
      DefaultPort = 5555
  };

  var validator = Validator.Create(model, "DefaultPort")
      .IsPort("Invalid port number.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's default port number is lower than the maximum allowed port number (65535).
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
