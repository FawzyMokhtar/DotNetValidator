import {Component, Input} from "@angular/core";
import {IPostSectionItem} from "../../models";

@Component({
  selector: "app-post-section-navigator",
  templateUrl: "./post-section-navigator.component.html",
  styleUrls: ["./post-section-navigator.component.sass"]
})
export class PostSectionNavigatorComponent {
  @Input() route: string;
  @Input() sections: IPostSectionItem[];
}
