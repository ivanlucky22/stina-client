import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserIconComponent} from './user-icon/user-icon.component';
import {RouterModule} from "@angular/router";
import {PicturesUploadContainerComponent} from './pictures-upload-container/pictures-upload-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [UserIconComponent, PicturesUploadContainerComponent],
  exports: [UserIconComponent,
    PicturesUploadContainerComponent]
})
export class SharedModule {
}
