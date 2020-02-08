import {Component, Input} from "@angular/core";
import {IPost} from "../../models";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.sass"]
})
export class PostComponent {
  @Input() route: string;
  @Input() post: IPost;
  @Input() previous: IPost;
  @Input() next: IPost;
}
