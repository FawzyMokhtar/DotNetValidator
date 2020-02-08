import {Component, Input} from "@angular/core";
import {IPostGroup} from "../../models";

@Component({
  selector: "app-side-navigator-group",
  templateUrl: "./side-navigator-group.component.html",
  styleUrls: ["./side-navigator-group.component.sass"]
})
export class SideNavigatorGroupComponent {
  @Input() group: IPostGroup;
}
