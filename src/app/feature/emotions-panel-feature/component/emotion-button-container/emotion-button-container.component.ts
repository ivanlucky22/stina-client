import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-emotion-button-container',
  templateUrl: './emotion-button-container.component.html',
  styleUrls: ['./emotion-button-container.component.css']
})
export class EmotionButtonContainerComponent implements OnInit {

  @Input() emotions: any;
  @Input() emotionSelected: boolean;
  @Input() classes: string;
  @Output() emotionClicked = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  clicked() {
    this.emotionSelected = !this.emotionSelected;
    this.emotionClicked.emit(this.emotionSelected);
  }
}
