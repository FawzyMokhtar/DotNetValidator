import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: "app-contributors",
  templateUrl: "./contributors.component.html",
  styleUrls: ["./contributors.component.sass"]
})
export class ContributorsComponent implements OnInit {

  versionId = "2.0.0";
  postId = "contributors";

  post: IPost;
  previous: IPost;
  next: IPost;
  settings = environment;

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
