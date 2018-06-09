import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from '@app/core/core.module';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "@app/feature/component/page-not-found/page-not-found.component";
import {MainPageComponent} from "@app/core/component/main-page/main-page.component";
import {HttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {UserDetailsPageComponent} from "@app/feature/component/user-details-page/user-details-page.component";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {VerificationPageComponent} from "@app/feature/component/verification-page/verification-page.component";
import {environment} from "@env/environment";

const appRoutes: Routes = [
  {path: 'users/:id', component: UserDetailsPageComponent},
  {path: '', component: MainPageComponent},
  {path: 'verification', component: VerificationPageComponent},
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
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Stina'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    AngularFireDatabaseModule,
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
