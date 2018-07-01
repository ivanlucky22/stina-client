import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {PublishingFormComponent} from "@app/feature/publising-form-feature/component/publishing-form/publishing-form.component";
import {SharedModule} from "@app/shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TranslateModule,
    NgSelectModule
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
