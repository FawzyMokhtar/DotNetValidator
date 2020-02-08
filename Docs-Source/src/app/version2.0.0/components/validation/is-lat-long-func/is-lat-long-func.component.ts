import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-lat-long",
  templateUrl: "./is-lat-long-func.component.html",
  styleUrls: ["./is-lat-long-func.component.sass"]
})
export class IsLatLongFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "is-lat-long-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public string Location { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith",
      Location = "Any invalid coordinates"
  };

  var validator = Validator.Create(model, "Location")
      .IsLatLong("Invalid location.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "Location",
          ErrorMessages = [
            "Invalid location."
          ]
        }
     ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith",
      Location = "51.498134, -0.201755"
  };

  var validator = Validator.Create(model, "Location")
      .IsLatLong("Invalid location.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's location is a valid latitude and longitude.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
