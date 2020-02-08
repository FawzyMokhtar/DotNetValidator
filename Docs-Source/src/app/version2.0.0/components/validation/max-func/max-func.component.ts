import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-max-func",
  templateUrl: "./max-func.component.html",
  styleUrls: ["./max-func.component.sass"]
})
export class MaxFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "max-func";

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
      Age = 30
  };

  var validator = Validator.Create(model, "Age")
      .Max(25, "Invalid age.");

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
      .Max(new DateTime(2015, 06, 01), "Invalid graduation-date.");

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
      .Max(new TimeSpan(08, 00, 00), "Invalid available-time.");

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
