import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-mac-address-func",
  templateUrl: "./is-mac-address-func.component.html",
  styleUrls: ["./is-mac-address-func.component.sass"]
})
export class IsMacAddressFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "is-mac-address-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public string PCMacAddress { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith",
      PCMacAddress = "00:0a:95:@#:68:16"
  };

  var validator = Validator.Create(model, "PCMacAddress")
      .IsMACAddress("Invalid mac-address.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "PCMacAddress",
          ErrorMessages = [
            "Invalid mac-address."
          ]
        }
     ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith",
      PCMacAddress = "00:0a:95:9d:68:16"
  };

  var validator = Validator.Create(model, "PCMacAddress")
      .IsMACAddress("Invalid mac-address.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's pc mac-address is a valid mac-address.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
