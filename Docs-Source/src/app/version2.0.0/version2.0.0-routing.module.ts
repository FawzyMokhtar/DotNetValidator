import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import * as fromContainers from "./containers";
import * as fromComponents from "./components";

const routes: Routes = [
  {
    path: "",
    component: fromContainers.MainComponent,
    children: [
      {
        path: "getting-started",
        component: fromComponents.GettingStartedComponent
      },


      {
        path: "validator-class",
        component: fromComponents.ValidatorClassComponent
      },
      {
        path: "validation-error-class",
        component: fromComponents.ValidationErrorClassComponent
      },
      {
        path: "validation-result-class",
        component: fromComponents.ValidationResultClassComponent
      },

      {
        path: "black-list-func",
        component: fromComponents.BlackListFuncComponent
      },
      {
        path: "contains-func",
        component: fromComponents.ContainsFuncComponent
      },
      {
        path: "custom-validator-func",
        component: fromComponents.CustomValidatorFuncComponent
      },
      {
        path: "ends-with-func",
        component: fromComponents.EndsWithFuncComponent
      },
      {
        path: "is-alpha-func",
        component: fromComponents.IsAlphaFuncComponent
      },
      {
        path: "is-alpha-numeric-func",
        component: fromComponents.IsAlphaNumericFuncComponent
      },
      {
        path: "is-ascii-func",
        component: fromComponents.IsAsciiFuncComponent
      },
      {
        path: "is-base64-func",
        component: fromComponents.IsBase64FuncComponent
      },
      {
        path: "is-credit-card-func",
        component: fromComponents.IsCreditCardFuncComponent
      },
      {
        path: "is-email-func",
        component: fromComponents.IsEmailFuncComponent
      },
      {
        path: "is-file-uri-func",
        component: fromComponents.IsFileUriFuncComponent
      },
      {
        path: "is-fqdn-func",
        component: fromComponents.IsFqdnFuncComponent
      },
      {
        path: "is-guid-func",
        component: fromComponents.IsGuidFuncComponent
      },
      {
        path: "is-in-range-func",
        component: fromComponents.IsInRangeFuncComponent
      },
      {
        path: "is-ip-func",
        component: fromComponents.IsIpFuncComponent
      },
      {
        path: "is-isbn-func",
        component: fromComponents.IsIsbnFuncComponent
      },
      {
        path: "is-isrc-func",
        component: fromComponents.IsIsrcFuncComponent
      },
      {
        path: "is-issn-func",
        component: fromComponents.IsIssnFuncComponent
      },
      {
        path: "is-lat-long-func",
        component: fromComponents.IsLatLongFuncComponent
      },
      {
        path: "is-length-func",
        component: fromComponents.IsLengthFuncComponent
      },
      {
        path: "is-mac-address-func",
        component: fromComponents.IsMacAddressFuncComponent
      },
      {
        path: "is-not-null-func",
        component: fromComponents.IsNotNullFuncComponent
      },
      {
        path: "is-port-func",
        component: fromComponents.IsPortFuncComponent
      },
      {
        path: "is-postal-code-func",
        component: fromComponents.IsPostalCodeFuncComponent
      },
      {
        path: "is-url-func",
        component: fromComponents.IsUrlFuncComponent
      },
      {
        path: "matches-func",
        component: fromComponents.MatchesFuncComponent
      },
      {
        path: "max-func",
        component: fromComponents.MaxFuncComponent
      },
      {
        path: "max-length-func",
        component: fromComponents.MaxLengthFuncComponent
      },
      {
        path: "min-func",
        component: fromComponents.MinFuncComponent
      },
      {
        path: "min-length-func",
        component: fromComponents.MinLengthFuncComponent
      },
      {
        path: "optional-func",
        component: fromComponents.OptionalFuncComponent
      },
      {
        path: "starts-with-func",
        component: fromComponents.StartsWithFuncComponent
      },
      {
        path: "white-list-func",
        component: fromComponents.WhiteListFuncComponent
      },

      {
        path: "sanitization-introduction",
        component: fromComponents.SanitizationIntroComponent
      },
      {
        path: "custom-sanitizer-func",
        component: fromComponents.CustomSanitizerFuncComponent
      },
      {
        path: "to-lower-func",
        component: fromComponents.ToLowerFuncComponent
      },
      {
        path: "to-upper-func",
        component: fromComponents.ToUpperFuncComponent
      },
      {
        path: "to-utc-func",
        component: fromComponents.ToUtcFuncComponent
      },
      {
        path: "trim-end-func",
        component: fromComponents.TrimEndFuncComponent
      },
      {
        path: "trim-func",
        component: fromComponents.TrimFuncComponent
      },
      {
        path: "trim-start-func",
        component: fromComponents.TrimStartFuncComponent
      },

      {
        path: "full-model-validation",
        component: fromComponents.FullModelValidationComponent
      },
      {
        path: "validate-vs-result",
        component: fromComponents.ValidateVsResultComponent
      },

      {
        path: "release-notes",
        component: fromComponents.ReleaseNotesComponent
      },
      {
        path: "why-dotnet-validator",
        component: fromComponents.WhyDotnetValidatorComponent
      },
      {
        path: "contributors",
        component: fromComponents.ContributorsComponent
      },

      {
        path: "**",
        pathMatch: "full",
        redirectTo: "getting-started"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Version200RoutingModule {}
