import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './component/navigation/navigation.component';
import {WallComponent} from './component/wall/wall.component';
import {MainPageComponent} from './component/main-page/main-page.component';
import {ArticleRepository} from '@app/core/service/repository/article-repository.service';
import {HttpClientModule} from "@angular/common/http";
import {ArticleComponent} from './component/article/article.component';
import {MatIconModule, MatProgressBarModule} from "@angular/material";
import {FirebaseService} from "@app/core/service/firebase.service";
import {FiltersFormComponent} from './component/filters-form/filters-form.component';
import {AuthService} from "@app/core/service/auth/auth.service";
import {UserService} from "@app/core/service/auth/user.service";
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {ModalModule} from "ngx-bootstrap";
import {FeatureModule} from "@app/feature/feature.module";
import {TranslateModule} from "@ngx-translate/core";
import {ArticleFooterComponent} from './component/article/component/article-footer/article-footer.component';
import {CommentsContainerComponent} from './component/article/component/comments-container/comments-container.component';
import {CommentRepositoryService} from "@app/core/service/repository/comment-repository.service";
import {CommentComponent} from './component/article/component/comment/comment.component';
import {NameGenerationService} from "@app/core/service/name-generation.service";
import {HttpService} from "@app/core/service/http.service";
import {TimeAgoPipe} from "@app/core/pipe/time-ago.pipe";
import {RouterModule} from "@angular/router";
import {SharedModule} from "@app/shared/shared.module";
import {ArticleService} from "@app/core/service/article.service";
import {ImageRepositoryService} from "@app/core/service/repository/image-repository.service";
import {LabelRepositoryService} from "@app/core/service/repository/label-repository.service";
import {LabelService} from "@app/core/service/label.service";
import {PublisingFormFeatureModule} from "@app/feature/publising-form-feature/publising-form-feature.module";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    MatIconModule,
    MatProgressBarModule,
    FeatureModule,
    RouterModule,
    ModalModule.forRoot(),
    TranslateModule,
    PublisingFormFeatureModule
  ],
  providers: [
    ArticleRepository,
    ArticleService,
    ImageRepositoryService,
    FirebaseService,
    AuthService,
    UserService,
    CommentRepositoryService,
    HttpService,
    NameGenerationService,
    LabelRepositoryService,
    LabelService
  ],
  declarations: [
    NavigationComponent,
    WallComponent,
    MainPageComponent,
    ArticleComponent,
    FiltersFormComponent,
    SidebarComponent,
    ArticleFooterComponent,
    CommentsContainerComponent,
    CommentComponent,
    TimeAgoPipe
  ],
  exports: [
    MainPageComponent,
    NavigationComponent
  ]
})
export class CoreModule {
}
