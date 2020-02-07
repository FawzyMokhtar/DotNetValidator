import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-isbn-func",
  templateUrl: "./is-isbn-func.component.html",
  styleUrls: ["./is-isbn-func.component.sass"]
})
export class IsIsbnFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "is-isbn-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public string BookNumber { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith",
      BookNumber = "123456"
  };

  var validator = Validator.Create(model, "BookNumber")
      .IsISBN("Invalid book-number.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "BookNumber",
          ErrorMessages = [
            "Invalid book-number."
          ]
        }
     ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith",
      BookNumber = "007462542X"
  };

  var validator = Validator.Create(model, "BookNumber")
      .IsISBN("Invalid book-number.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's book-number is a valid international standard book number (ISBN).
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
