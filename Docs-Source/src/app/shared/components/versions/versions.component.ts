import {Component, OnInit} from "@angular/core";
import {DocService} from "../../services";
import {IVersion} from "../../models";

@Component({
  selector: "app-versions",
  templateUrl: "./versions.component.html",
  styleUrls: ["./versions.component.sass"]
})
export class VersionsComponent implements OnInit {

  latestVersion: IVersion;
  versions: IVersion[];

  ngOnInit() {
    this.latestVersion = DocService.getLatestVersion();
    this.versions = DocService.getPastVersions();
  }

}
