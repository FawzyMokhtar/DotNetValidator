import {Component, Input} from "@angular/core";
import {IPost} from "../../models";

@Component({
  selector: "app-post-navigator",
  templateUrl: "./post-navigator.component.html",
  styleUrls: ["./post-navigator.component.sass"]
})
export class PostNavigatorComponent {
  @Input() previous: IPost;
  @Input() next: IPost;
}
