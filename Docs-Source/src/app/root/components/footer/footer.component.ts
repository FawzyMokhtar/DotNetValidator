import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {LibService} from "../../services";
import {IGitHubRepo, INugetPackage} from "../../models";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.sass"]
})
export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();
  settings = environment;

  gitHubRepo$: Observable<IGitHubRepo>;
  nugetPackage$: Observable<INugetPackage>;

  constructor (private libService: LibService) {}

  ngOnInit() {
    this.gitHubRepo$ = this.libService.fetchGitHubRepo();
    this.nugetPackage$ = this.libService.fetchNugetPackage();
  }
}
