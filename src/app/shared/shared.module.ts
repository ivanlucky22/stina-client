import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserIconComponent} from './user-icon/user-icon.component';
import {RouterModule} from "@angular/router";
import { AutoresizeDirective } from './directive/autoresize.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [UserIconComponent, AutoresizeDirective],
  exports: [UserIconComponent]
})
export class SharedModule {
}
