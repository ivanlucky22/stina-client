import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDetailComponent} from './user-details-feature/component/user-detail/user-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserDetailsPageComponent} from './user-details-feature/component/user-details-page/user-details-page.component';
import {MatFormFieldModule, MatIconModule} from "@angular/material";
import {VerificationPageComponent} from './authorization-feature/component/verification-page/verification-page.component';
import {SignUpFormComponent} from './authorization-feature/component/sign-up-form/sign-up-form.component';
import {TranslateModule} from "@ngx-translate/core";
import {NgxAuthFirebaseUIModule} from "ngx-auth-firebaseui";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "@env/environment";
import {SignInFormComponent} from './authorization-feature/component/sign-in-form/sign-in-form.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "@app/shared/shared.module";
import {ConfidentialityPolicyPageComponent} from "@app/feature/shared-feature/component/confidentiality-policy-page/confidentiality-policy-page.component";
import {UserAgreementPageComponent} from "@app/feature/shared-feature/component/user-agreement-page/user-agreement-page.component";
import {PageNotFoundComponent} from "@app/feature/shared-feature/component/page-not-found/page-not-found.component";
import {LanguageComponent} from "@app/feature/shared-feature/component/language/language.component";
import {SelectModule} from "ng2-select";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    TranslateModule,
    BrowserAnimationsModule,
    MatIconModule,
    SharedModule,
    SelectModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig),
  ],
  declarations: [
    PageNotFoundComponent,
    UserDetailComponent,
    LanguageComponent,
    UserDetailsPageComponent,
    VerificationPageComponent,
    SignUpFormComponent,
    SignInFormComponent,
    ConfidentialityPolicyPageComponent,
    UserAgreementPageComponent,
  ],
  providers: [],
  exports: [
    LanguageComponent,
    SignInFormComponent
  ]
})
export class FeatureModule {
}
