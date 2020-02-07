import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {IGitHubRepo, INugetPackage} from "../models";

/**
 * A library service to fetch git-hb & nuget-package data.
 */
@Injectable()
export class LibService {

  constructor (private http: HttpClient) {}

  /**
   * Fetches the git-hub-repo data.
   */
  public fetchGitHubRepo(): Observable<IGitHubRepo> {
    return this.http.get<IGitHubRepo>(environment.gitHubApi);
  }

  /**
   * Fetches the nuget-package data.
   */
  public fetchNugetPackage(): Observable<INugetPackage> {
    return this.http.get<INugetPackage>(environment.nugetApi);
  }
}
