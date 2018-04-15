import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './component/navigation/navigation.component';
import {PublishingFormComponent} from './component/publishing-form/publishing-form.component';
import {WallComponent} from './component/wall/wall.component';
import {MainPageComponent} from './component/main-page/main-page.component';
import {ArticlePublisherService} from '@app/core/service/article-publisher.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ArticlePublisherService],
  declarations: [NavigationComponent, PublishingFormComponent, WallComponent, MainPageComponent],
  exports: [MainPageComponent]

})
export class CoreModule {
}
