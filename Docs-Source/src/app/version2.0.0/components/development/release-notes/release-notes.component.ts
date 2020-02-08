import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-release-notes",
  templateUrl: "./release-notes.component.html",
  styleUrls: ["./release-notes.component.sass"]
})
export class ReleaseNotesComponent implements OnInit {

  versionId = "2.0.0";
  postId = "release-notes";

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
