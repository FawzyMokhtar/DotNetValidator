import {Component, Input} from "@angular/core";
import {IPost} from "../../models";

@Component({
  selector: "app-side-navigator-item",
  templateUrl: "./side-navigator-item.component.html",
  styleUrls: ["./side-navigator-item.component.sass"]
})
export class SideNavigatorItemComponent {
  @Input() post: IPost;
}
