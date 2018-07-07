import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-tags-container',
  templateUrl: './tags-container.component.html',
  styleUrls: ['./tags-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsContainerComponent {

  @Input() labelsMap: any;

  constructor() {
  }

  get labels() {
    return this.labelsMap ? Object.keys(this.labelsMap) : [];
  }
}
