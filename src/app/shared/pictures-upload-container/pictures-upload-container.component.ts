import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pictures-upload-container',
  templateUrl: './pictures-upload-container.component.html',
  styleUrls: ['./pictures-upload-container.component.css']
})
export class PicturesUploadContainerComponent implements OnInit {

  @Input() pictures: string[];

  constructor() {
  }

  ngOnInit() {
  }

}
