import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-ip-func",
  templateUrl: "./is-ip-func.component.html",
  styleUrls: ["./is-ip-func.component.sass"]
})
export class IsIpFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "is-ip-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public string DeviceIP { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith",
      DeviceIP = "fc.160.10.240"
  };

  var validator = Validator.Create(model, "DeviceIP")
      .IsIP("Invalid device-ip.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "DeviceIP",
          ErrorMessages = [
            "Invalid device-ip."
          ]
        }
     ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith",
      DeviceIP = "3ffe:1900:4545:3:200:f8ff:fe21"
  };

  var validator = Validator.Create(model, "DeviceIP")
      .IsIP("Invalid device-ip.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "DeviceIP",
          ErrorMessages = [
            "Invalid device-ip."
          ]
        }
     ]
  */`;

  example3 = `
  var model = new Person
  {
      Name = "John Smith",
      DeviceIP = "3ffe:1900:4545:3:200:f8ff:fe21:67cf"
  };

  var validator = Validator.Create(model, "DeviceIP")
      .IsIP(IPVersion.IPv4, "Invalid device-ip.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "DeviceIP",
          ErrorMessages = [
            "Invalid device-ip."
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

