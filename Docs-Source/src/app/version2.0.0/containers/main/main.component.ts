import {Component, OnInit} from "@angular/core";
import {IVersion, DocService} from "../../../shared";
import {GlobalService} from "../../../root";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.sass"]
})
export class MainComponent implements OnInit {

  versionId = "2.0.0";
  version: IVersion;

  constructor (private globalService: GlobalService) {}

  ngOnInit(): void {
    this.version = DocService.findVersion(this.versionId);
    this.globalService.setVersion(this.version.version);
  }

}
