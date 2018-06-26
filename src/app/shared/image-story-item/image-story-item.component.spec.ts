import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageStoryItemComponent } from './image-story-item.component';

describe('ImageStoryItemComponent', () => {
  let component: ImageStoryItemComponent;
  let fixture: ComponentFixture<ImageStoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageStoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageStoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
