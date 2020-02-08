import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SharedModule} from "../shared";
import {Version100RoutingModule} from "./version1.0.0-routing.module";

import * as fromContainers from "./containers";
import * as fromComponents from "./components";



@NgModule({
  declarations: [
    ...fromContainers.CONTAINERS,
    ...fromComponents.COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule,
    Version100RoutingModule
  ]
})
export class Version100Module {}
