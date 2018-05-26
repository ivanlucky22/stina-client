import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './component/navigation/navigation.component';
import {PublishingFormComponent} from './component/publishing-form/publishing-form.component';
import {WallComponent} from './component/wall/wall.component';
import {MainPageComponent} from './component/main-page/main-page.component';
import {ArticleRepository} from '@app/core/service/article-repository.service';
import {HttpClientModule} from "@angular/common/http";
import {ArticleComponent} from './component/article/article.component';
import {MatIconModule, MatProgressBarModule} from "@angular/material";
import {FirebaseService} from "@app/core/service/firebase.service";
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireAuthModule} from "angularfire2/auth";
import {FiltersFormComponent} from './component/filters-form/filters-form.component';
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AuthService} from "@app/core/service/auth/auth.service";
import {UserService} from "@app/core/service/auth/user.service";
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {ModalModule} from "ngx-bootstrap";
import {FeatureModule} from "@app/feature/feature.module";
import {TranslateModule} from "@ngx-translate/core";
import {ArticleFooterComponent} from './component/article/component/article-footer/article-footer.component';
import {CommentsContainerComponent} from './component/article/component/comments-container/comments-container.component';
import {CommentRepositoryService} from "@app/core/service/comment-repository.service";
import {CommentComponent} from './component/article/comment/comment.component';
import {NameGenerationService} from "@app/core/service/name-generation.service";
import {HttpService} from "@app/core/service/http.service";

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
    AngularFireDatabaseModule,
    MatProgressBarModule,
    FeatureModule,
    ModalModule.forRoot(),
    TranslateModule
  ],
  providers: [
    ArticleRepository,
    FirebaseService,
    AuthService,
    UserService,
    CommentRepositoryService,
    HttpService,
    NameGenerationService
  ],
  declarations: [
    NavigationComponent,
    PublishingFormComponent,
    WallComponent,
    MainPageComponent,
    ArticleComponent,
    FiltersFormComponent,
    SidebarComponent,
    ArticleFooterComponent,
    CommentsContainerComponent,
    CommentComponent],
  exports: [MainPageComponent]

})
export class CoreModule {
}
