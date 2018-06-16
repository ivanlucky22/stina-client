import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {UserDetailComponent} from './component/user-detail/user-detail.component';
import {LanguageComponent} from './component/language/language.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserDetailsPageComponent} from './component/user-details-page/user-details-page.component';
import {MatFormFieldModule, MatIconModule} from "@angular/material";
import {VerificationPageComponent} from './component/verification-page/verification-page.component';
import {SignUpFormComponent} from './component/sign-up-form/sign-up-form.component';
import {TranslateModule} from "@ngx-translate/core";
import {NgxAuthFirebaseUIModule} from "ngx-auth-firebaseui";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "@env/environment";
import {SignInFormComponent} from './component/sign-in-form/sign-in-form.component';
import { ConfidentialityPolicyPageComponent } from './component/confidentiality-policy-page/confidentiality-policy-page.component';
import { UserAgreementPageComponent } from './component/user-agreement-page/user-agreement-page.component';
import {RouterModule} from "@angular/router";

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
