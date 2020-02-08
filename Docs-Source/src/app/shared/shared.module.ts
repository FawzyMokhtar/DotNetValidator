import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import * as fromContainers from "./containers";
import * as fromComponents from "./components";
import * as fromDirectives from "./directives";

@NgModule({
  declarations: [
    ...fromContainers.CONTAINERS,
    ...fromComponents.COMPONENTS,
    ...fromDirectives.DIRECTIVES
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...fromContainers.CONTAINERS,
    ...fromComponents.COMPONENTS,
    ...fromDirectives.DIRECTIVES
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
