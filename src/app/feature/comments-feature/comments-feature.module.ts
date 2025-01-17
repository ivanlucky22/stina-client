import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentComponent} from "@app/feature/comments-feature/component/comment/comment.component";
import {CommentsContainerComponent} from "@app/feature/comments-feature/component/comments-container/comments-container.component";
import {SharedModule} from "@app/shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {MatInputModule} from "@angular/material";
import {EmotionsPanelFeatureModule} from "@app/feature/emotions-panel-feature/emotions-panel-feature.module";
import {RouterModule} from "@angular/router";
import {EmojiModule} from "@ctrl/ngx-emoji-mart/ngx-emoji";
import {PickerModule} from "@ctrl/ngx-emoji-mart";
import {ClickOutsideModule} from "ng-click-outside";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TranslateModule,
    MatInputModule,
    EmojiModule,
    PickerModule,
    ClickOutsideModule,
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
