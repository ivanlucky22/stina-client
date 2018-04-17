import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './component/navigation/navigation.component';
import {PublishingFormComponent} from './component/publishing-form/publishing-form.component';
import {WallComponent} from './component/wall/wall.component';
import {MainPageComponent} from './component/main-page/main-page.component';
import {ArticleRepository} from '@app/core/service/article-repository.service';
import {HttpRequestService} from "@app/core/service/http-request.service";
import {HttpClientModule} from "@angular/common/http";
import {ArticleEventHandlerService} from "@app/core/service/article-event-handler.service";
import { ArticleComponent } from './component/article/article.component';
import {MatIconModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    ArticleRepository,
    HttpRequestService,
    ArticleEventHandlerService],
  declarations: [
    NavigationComponent,
    PublishingFormComponent,
    WallComponent,
    MainPageComponent,
    ArticleComponent],
  exports: [MainPageComponent]

})
export class CoreModule {
}
