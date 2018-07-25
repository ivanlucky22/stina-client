import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmotionsPanelComponent} from './component/emotions-panel/emotions-panel.component';
import { EmotionButtonContainerComponent } from './component/emotion-button-container/emotion-button-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmotionsPanelComponent, EmotionButtonContainerComponent],
  exports: [EmotionsPanelComponent,
    EmotionButtonContainerComponent]
})
export class EmotionsPanelFeatureModule {
}
