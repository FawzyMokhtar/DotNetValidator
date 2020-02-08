import {Component, Input} from "@angular/core";
import {environment} from "../../../../environments/environment";

@Component({
  selector: "app-post-header",
  templateUrl: "./post-header.component.html",
  styleUrls: ["./post-header.component.sass"]
})
export class PostHeaderComponent {
  @Input() title: string;
  @Input() showEditBtn = true;
  settings = environment;
}
