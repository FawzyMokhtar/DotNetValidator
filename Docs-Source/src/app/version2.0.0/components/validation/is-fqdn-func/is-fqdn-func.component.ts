import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-is-fqdn-func",
  templateUrl: "./is-fqdn-func.component.html",
  styleUrls: ["./is-fqdn-func.component.sass"]
})
export class IsFqdnFuncComponent implements OnInit {

  versionId = "2.0.0";
  postId = "is-fqdn-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
      public string DomainName { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith",
      DomainName = "smith.com"
  };

  var validator = Validator.Create(model, "DomainName")
      .IsFQDN("Invalid domain name.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "DomainName",
          ErrorMessages = [
            "Invalid domain name."
          ]
        }
      ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = "John Smith",
      DomainName = "john.smith.com"
  };

  var validator = Validator.Create(model, "DomainName")
      .IsFQDN("Invalid domain name.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's domain-name is a valid fully qualified domain name.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
