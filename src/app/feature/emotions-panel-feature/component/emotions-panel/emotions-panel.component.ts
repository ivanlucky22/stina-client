import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as firebase from "firebase";
import * as _ from 'lodash';
import {Emotionable} from "@app/core/model/interfaces/emotionable";

@Component({
  selector: 'app-emotions-panel',
  templateUrl: './emotions-panel.component.html',
  styleUrls: ['./emotions-panel.component.css']
})
export class EmotionsPanelComponent implements OnInit {

  @Input() emotionable: Emotionable;
  @Input() user: firebase.User;
  @Input() horizontal = false;
  @Output() updateEmotionable = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  emotionClicked(emotions) {
    this.usedEmotion(emotions) ? this.decreaseEmotion(emotions) : this.increaseEmotion(emotions);
    this.updateEmotionable.emit();
  }

  private usedEmotion(emotion) {
    return this.user ? _.includes(emotion, this.user.uid) : 0;
  }

  private decreaseEmotion(emotions: Array<string>) {
    _.remove(emotions, id => id === this.user.uid);
  }

  private increaseEmotion(emotions) {
    emotions.push(this.user.uid);
  }
}
