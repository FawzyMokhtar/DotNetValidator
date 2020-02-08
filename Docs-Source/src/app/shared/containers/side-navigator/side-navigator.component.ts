import {Component, Input} from "@angular/core";
import {IPostGroup} from "../../models";

@Component({
  selector: "app-side-navigator",
  templateUrl: "./side-navigator.component.html",
  styleUrls: ["./side-navigator.component.sass"]
})
export class SideNavigatorComponent {
  @Input() groups: IPostGroup[];
}
