import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePageComponent } from './component/article-page/article-page.component';
import {ArticleFeatureModule} from "@app/feature/article-feature/article-feature.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    ArticleFeatureModule,
    RouterModule
  ],
  declarations: [ArticlePageComponent]
})
export class ArticlePageFeatureModule { }
