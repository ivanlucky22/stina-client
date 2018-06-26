import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStoryItemComponent } from './text-story-item.component';

describe('TextStoryItemComponent', () => {
  let component: TextStoryItemComponent;
  let fixture: ComponentFixture<TextStoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextStoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextStoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
