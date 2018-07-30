import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmotionsPanelFeatureModule} from "@app/feature/emotions-panel-feature/emotions-panel-feature.module";
import {ArticleComponent} from "@app/feature/article-feature/component/article/article.component";
import {SharedModule} from "@app/shared/shared.module";
import {CommentsFeatureModule} from "@app/feature/comments-feature/comments-feature.module";
import {ArticleFooterComponent} from "@app/feature/article-feature/component/article-footer/article-footer.component";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CommentsFeatureModule,
    TranslateModule,
    EmotionsPanelFeatureModule,
    RouterModule
  ],
  declarations: [
    ArticleComponent,
    ArticleFooterComponent
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleFeatureModule {
}
