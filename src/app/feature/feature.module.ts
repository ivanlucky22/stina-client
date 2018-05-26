import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {UserDetailComponent} from './component/user-detail/user-detail.component';
import {LanguageComponent} from './component/language/language.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageNotFoundComponent,
    UserDetailComponent,
    LanguageComponent,
  ],
  providers: [],
  exports: [LanguageComponent]
})
export class FeatureModule {
}
