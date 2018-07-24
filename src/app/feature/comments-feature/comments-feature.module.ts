import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentComponent} from "@app/feature/comments-feature/component/comment/comment.component";
import {CommentsContainerComponent} from "@app/feature/comments-feature/component/comments-container/comments-container.component";
import {SharedModule} from "@app/shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {MatInputModule} from "@angular/material";
import {EmotionsPanelFeatureModule} from "@app/feature/emotions-panel-feature/emotions-panel-feature.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    MatInputModule,
    EmotionsPanelFeatureModule
  ],
  declarations: [
    CommentComponent,
    CommentsContainerComponent
  ],
  exports: [
    CommentComponent,
    CommentsContainerComponent
  ]
})
export class CommentsFeatureModule {
}
