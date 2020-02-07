import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-credit-card-func",
  templateUrl: "./is-credit-card-func.component.html",
  styleUrls: ["./is-credit-card-func.component.sass"]
})
export class IsCreditCardFuncComponent implements OnInit {
  versionId = "2.0.0";
  postId = "is-credit-card-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public string CreditCardNum { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith",
      CreditCardNum = "A992739871C"
  };

  var validator = Validator.Create(model, "CreditCardNum")
      .IsCreditCard("Invalid credit card number.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "CreditCardNum",
          ErrorMessages = [
            "Invalid credit card number."
          ]
        }
      ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith",
      CreditCardNum = "79927398713"
  };

  var validator = Validator.Create(model, "CreditCardNum")
      .IsCreditCard("Invalid credit card number.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's credit card number is valid.
  */`;

  example3 = `
  var model = new Person
  {
      Name = "John Smith",
      CreditCardNum = "4 0 1 2 8 8 8 8 8 8 8 8 1 8 8 1"
  };

  var validator = Validator.Create(model, "CreditCardNum")
      .IsCreditCard("Invalid credit card number.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's credit card number is valid.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
