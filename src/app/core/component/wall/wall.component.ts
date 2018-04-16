import {Component, OnInit} from '@angular/core';
import {Article} from '@app/core/model/article';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  articles: Article[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
