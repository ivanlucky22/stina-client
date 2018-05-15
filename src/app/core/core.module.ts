import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './component/navigation/navigation.component';
import {PublishingFormComponent} from './component/publishing-form/publishing-form.component';
import {WallComponent} from './component/wall/wall.component';
import {MainPageComponent} from './component/main-page/main-page.component';
import {ArticleRepository} from '@app/core/service/article-repository.service';
import {HttpRequestService} from "@app/core/service/http-request.service";
import {HttpClientModule} from "@angular/common/http";
import {ArticleComponent} from './component/article/article.component';
import {MatIconModule} from "@angular/material";
import {FirebaseService} from "@app/core/service/firebase.service";
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireAuthModule} from "angularfire2/auth";
import { FiltersFormComponent } from './component/filters-form/filters-form.component';
import { AngularFireDatabaseModule} from "angularfire2/database";
import {AuthService} from "@app/core/service/auth/auth.service";
import {UserService} from "@app/core/service/auth/user.service";

export const firebaseConfig = {
  apiKey: "AIzaSyDjFEIHQ0I8zzwHpuLl4Bp6rGlxaWbc8Bk",
  authDomain: "stina-2b904.firebaseapp.com",
  databaseURL: "https://stina-2b904.firebaseio.com",
  projectId: "stina-2b904",
  storageBucket: "stina-2b904.appspot.com",
  messagingSenderId: "454249451134"
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    AngularFireModule.initializeApp(firebaseConfig, 'Stina'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    ArticleRepository,
    HttpRequestService,
    FirebaseService,
    AuthService,
    UserService
  ],
  declarations: [
    NavigationComponent,
    PublishingFormComponent,
    WallComponent,
    MainPageComponent,
    ArticleComponent,
    FiltersFormComponent],
  exports: [MainPageComponent]

})
export class CoreModule {
}
