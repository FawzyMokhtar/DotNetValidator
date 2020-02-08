import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-validator-class",
  templateUrl: "./validator-class.component.html",
  styleUrls: ["./validator-class.component.sass"]
})
export class ValidatorClassComponent implements OnInit {

  versionId = "1.0.0";
  postId = "validator-class";

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
