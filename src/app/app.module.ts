import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from '@app/core/core.module';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "@app/core/component/main-page/main-page.component";
import {HttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {UserDetailsPageComponent} from "@app/feature/user-details-feature/component/user-details-page/user-details-page.component";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {VerificationPageComponent} from "@app/feature/authorization-feature/component/verification-page/verification-page.component";
import {environment} from "@env/environment";
import {AngularFireStorageModule} from "angularfire2/storage";
import {ConfidentialityPolicyPageComponent} from "@app/feature/shared-feature/component/confidentiality-policy-page/confidentiality-policy-page.component";
import {UserAgreementPageComponent} from "@app/feature/shared-feature/component/user-agreement-page/user-agreement-page.component";
import {PageNotFoundComponent} from "@app/feature/shared-feature/component/page-not-found/page-not-found.component";
import {ArticlePageComponent} from "@app/feature/article-page-feature/component/article-page/article-page.component";
import {ArticlePageFeatureModule} from "@app/feature/article-page-feature/article-page-feature.module";

const appRoutes: Routes = [
  {path: 'users/:id', component: UserDetailsPageComponent},
  {path: '', component: MainPageComponent},
  {path: 'home', component: MainPageComponent},
  {path: ':filterId', component: MainPageComponent},
  {path: 'policy/confidentiality', component: ConfidentialityPolicyPageComponent},
  {path: 'policy/agreement', component: UserAgreementPageComponent},
  {path: 'verification', component: VerificationPageComponent},
  {path: 'article/:id', component: ArticlePageComponent},
  {path: '**', component: PageNotFoundComponent}
];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ArticlePageFeatureModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Stina'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true} // <-- debugging purposes only
    ),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
