import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserIconComponent} from './user-icon/user-icon.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [UserIconComponent],
  exports: [UserIconComponent]
})
export class SharedModule {
}
