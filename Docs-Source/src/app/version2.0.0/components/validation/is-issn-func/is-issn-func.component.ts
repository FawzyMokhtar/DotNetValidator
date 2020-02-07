import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-issn-func",
  templateUrl: "./is-issn-func.component.html",
  styleUrls: ["./is-issn-func.component.sass"]
})
export class IsIssnFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "is-issn-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public string BookSerialNum { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith",
      BookSerialNum = "123456"
  };

  var validator = Validator.Create(model, "BookSerialNum")
      .IsISSN("Invalid book serial number.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "BookSerialNum",
          ErrorMessages = [
            "Invalid book serial number."
          ]
        }
     ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith",
      BookSerialNum = "ISSN 0277-786X"
  };

  var validator = Validator.Create(model, "BookSerialNum")
      .IsISSN("Invalid book serial number.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's book serial number is a valid international standard serial number (ISSN).
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
