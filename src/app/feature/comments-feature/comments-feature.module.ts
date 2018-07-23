import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentComponent} from "@app/feature/comments-feature/component/comment/comment.component";
import {CommentsContainerComponent} from "@app/feature/comments-feature/component/comments-container/comments-container.component";
import {SharedModule} from "@app/shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {MatInputModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    MatInputModule
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
