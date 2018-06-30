import {Component, Input, OnInit} from '@angular/core';
import {ImageStoryItem} from "@app/core/model/image-story-item";

@Component({
  selector: 'app-image-story-item',
  templateUrl: './image-story-item.component.html',
  styleUrls: ['./image-story-item.component.css']
})
export class ImageStoryItemComponent implements OnInit {

  @Input() storyItem: ImageStoryItem;
  private imagePreview: any;

  constructor() {
  }

  ngOnInit() {

    if (this.storyItem.previewImage) {
      const reader = new FileReader();
      reader.onload = (loaded: any) => {
        this.imagePreview = loaded.target.result;
      };
      reader.readAsDataURL(this.storyItem.previewImage);
    }
  }

}
