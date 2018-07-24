import {Component, Input, OnInit} from '@angular/core';
import * as firebase from "firebase";
import * as _ from 'lodash';
import {Comment} from "@app/core/model/comment";

@Component({
  selector: 'app-emotions-panel',
  templateUrl: './emotions-panel.component.html',
  styleUrls: ['./emotions-panel.component.css']
})
export class EmotionsPanelComponent implements OnInit {

  @Input() comment: Comment;
  @Input() user: firebase.User;

  constructor() {
  }

  ngOnInit() {
  }

  emotionClicked(emotions) {
    this.usedEmotion(emotions) ? this.decreaseEmotion(emotions) : this.increaseEmotion(emotions);
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
