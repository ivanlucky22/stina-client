import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserIconComponent} from './user-icon/user-icon.component';
import {RouterModule} from "@angular/router";
import {MatProgressBarModule} from "@angular/material";
import {EmojiModule} from "@ctrl/ngx-emoji-mart/ngx-emoji";
import {PickerModule} from "@ctrl/ngx-emoji-mart";
import {StoryItemComponent} from './story-item/story-item.component';
import {TextStoryItemComponent} from './text-story-item/text-story-item.component';
import {ImageStoryItemComponent} from './image-story-item/image-story-item.component';
import {FormsModule} from "@angular/forms";
import {FateModule} from "fate-editor";
import {TranslateModule} from "@ngx-translate/core";
import { TagsContainerComponent } from './tags-container/tags-container.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    RouterModule,
    EmojiModule,
    PickerModule,
    FormsModule,
    FateModule,
    TranslateModule
  ],
  declarations: [
    UserIconComponent,
    StoryItemComponent,
    TextStoryItemComponent,
    ImageStoryItemComponent,
    TagsContainerComponent,
  ],
  exports: [
    UserIconComponent,
    StoryItemComponent,
    TagsContainerComponent
  ]
})
export class SharedModule {
}
