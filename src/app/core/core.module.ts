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
import {FiltersFormComponent} from './component/filters-form/filters-form.component';
import {AuthService} from "@app/core/service/auth/auth.service";
import {UserService} from "@app/core/service/auth/user.service";
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {ModalModule} from "ngx-bootstrap";
import {FeatureModule} from "@app/feature/feature.module";
import {TranslateModule} from "@ngx-translate/core";
import {ArticleFooterComponent} from './component/article/component/article-footer/article-footer.component';
import {CommentsContainerComponent} from './component/article/component/comments-container/comments-container.component';
import {CommentRepositoryService} from "@app/core/service/comment-repository.service";
import {CommentComponent} from './component/article/component/comment/comment.component';
import {NameGenerationService} from "@app/core/service/name-generation.service";
import {HttpService} from "@app/core/service/http.service";
import {TimeAgoPipe} from "@app/core/pipe/time-ago.pipe";
import {RouterModule} from "@angular/router";
import {SharedModule} from "@app/shared/shared.module";
import {PickerModule} from '@ctrl/ngx-emoji-mart';
import {EmojiModule} from "@ctrl/ngx-emoji-mart/ngx-emoji";

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
    PickerModule,
    EmojiModule,
    // FileUploadModule
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
    CommentComponent,
    TimeAgoPipe
  ],
  exports: [
    MainPageComponent,
    NavigationComponent]

})
export class CoreModule {
}
