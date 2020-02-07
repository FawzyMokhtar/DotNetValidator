import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-in-range-func",
  templateUrl: "./is-in-range-func.component.html",
  styleUrls: ["./is-in-range-func.component.sass"]
})
export class IsInRangeFuncComponent implements OnInit {

  versionId = "1.0.0";
  postId = "is-in-range-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public int Age { get; set; }
      public DateTime GraduationDate { get; set; }
      public TimeSpan AvailableTime { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith",
      Age = 25
  };

  var validator = Validator.Create(model, "Age")
      .IsInRange(30, 35, "Invalid age.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "Age",
          ErrorMessages = [
            "Invalid age."
          ]
        }
     ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith",
      GraduationDate = new DateTime(2016, 06, 06)
  };

  var validator = Validator.Create(model, "GraduationDate")
      .IsInRange(new DateTime(2010, 06, 01), new DateTime(2015, 06, 01), "Invalid graduation-date.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "GraduationDate",
          ErrorMessages = [
            "Invalid graduation-date."
          ]
        }
      ]
  */`;

  example3 = `
  var model = new Person
  {
      Name = "John Smith",
      AvailableTime = new TimeSpan(10, 30, 00)
  };

  var validator = Validator.Create(model, "AvailableTime")
      .IsInRange(new TimeSpan(08, 00, 00), new TimeSpan(10, 00, 00), "Invalid available-time.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "AvailableTime",
          ErrorMessages = [
            "Invalid available-time."
          ]
        }
      ]
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
