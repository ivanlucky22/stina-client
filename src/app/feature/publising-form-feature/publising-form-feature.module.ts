import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PublishingFormComponent} from "@app/feature/publising-form-feature/component/publishing-form/publishing-form.component";
import {SharedModule} from "@app/shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {NgSelectModule} from "@ng-select/ng-select";
import {MatFormFieldModule, MatInputModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TranslateModule,
    NgSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    PublishingFormComponent
  ],
  exports: [
    PublishingFormComponent
  ]
})
export class PublisingFormFeatureModule {
}
