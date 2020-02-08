import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-why-dotnet-validator",
  templateUrl: "./why-dotnet-validator.component.html",
  styleUrls: ["./why-dotnet-validator.component.sass"]
})
export class WhyDotnetValidatorComponent implements OnInit {

  versionId = "2.0.0";
  postId = "why-dotnet-validator";

  post: IPost;
  previous: IPost;
  next: IPost;

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
