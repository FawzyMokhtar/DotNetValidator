import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SharedModule} from "../shared";
import {Version200RoutingModule} from "./version2.0.0-routing.module";

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
    Version200RoutingModule
  ]
})
export class Version200Module {}
