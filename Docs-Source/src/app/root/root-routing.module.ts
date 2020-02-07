import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import * as fromShared from "../shared";

import * as fromContainers from "./containers";

const routes: Routes = [
    {
        path: "docs",
        component: fromContainers.LayoutComponent,
        children: [
            {
                path: "v1.0.0",
                loadChildren: () => import("../version1.0.0").then(m => m.Version100Module)
            },
            {
                path: "v2.0.0",
                loadChildren: () => import("../version2.0.0").then(m => m.Version200Module)
            },
            {
                path: "**",
                pathMatch: "full",
                redirectTo: "v2.0.0"
            }
        ]
    },
    {
        path: "versions",
        component: fromContainers.LayoutComponent,
        children: [
            {
                path: "",
                component: fromShared.VersionsComponent
            },
            {
                path: "**",
                pathMatch: "full",
                redirectTo: ""
            },
        ]
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "docs"
    },
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        {
            // Automatic scrolling
            anchorScrolling: "enabled",
            // Use this value to scroll to the html element with a suitable view
            scrollOffset: [0, 60],
            scrollPositionRestoration: "top"
        }
    )
    ],
    exports: [RouterModule]
})
export class RootRoutingModule {}
