import {Component, Input, OnInit} from '@angular/core';
import {Label} from "@app/core/model/label";

@Component({
  selector: 'app-tags-container',
  templateUrl: './tags-container.component.html',
  styleUrls: ['./tags-container.component.css']
})
export class TagsContainerComponent implements OnInit {

  @Input() labels: Label[];

  constructor() {
  }

  ngOnInit() {
  }

}
