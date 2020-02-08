import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

/**
 * The global service of the app.
 */
@Injectable()
export class GlobalService {

  private versionSubject: BehaviorSubject<string> = new BehaviorSubject("");

  /**
   * The current selected documentation version or the latest version.
   */
  public version$ = this.versionSubject.asObservable();

  /**
   * Sets the current selected documentation version or the latest version name
   * @param versionName The current selected documentation version or the latest version name.
   */
  public setVersion(versionName: string) {
    this.versionSubject.next(versionName);
  }
}
