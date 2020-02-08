import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-validation-result-class",
  templateUrl: "./validation-result-class.component.html",
  styleUrls: ["./validation-result-class.component.sass"]
})
export class ValidationResultClassComponent implements OnInit {

  versionId = "2.0.0";
  postId = "validation-result-class";

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
