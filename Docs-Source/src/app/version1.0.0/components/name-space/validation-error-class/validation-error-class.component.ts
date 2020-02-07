import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-validation-error-class",
  templateUrl: "./validation-error-class.component.html",
  styleUrls: ["./validation-error-class.component.sass"]
})
export class ValidationErrorClassComponent implements OnInit {

  versionId = "1.0.0";
  postId = "validation-error-class";

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
