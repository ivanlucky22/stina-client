import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesUploadContainerComponent } from './pictures-upload-container.component';

describe('PicturesUploadContainerComponent', () => {
  let component: PicturesUploadContainerComponent;
  let fixture: ComponentFixture<PicturesUploadContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicturesUploadContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesUploadContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
