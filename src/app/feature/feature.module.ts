import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {UserDetailComponent} from './component/user-detail/user-detail.component';
import {LanguageComponent} from './component/language/language.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserDetailsPageComponent} from './component/user-details-page/user-details-page.component';
import {MatFormFieldModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  declarations: [
    PageNotFoundComponent,
    UserDetailComponent,
    LanguageComponent,
    UserDetailsPageComponent,
  ],
  providers: [],
  exports: [LanguageComponent]
})
export class FeatureModule {
}
