import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingFormComponent } from './publishing-form.component';

describe('PublishingFormComponent', () => {
  let component: PublishingFormComponent;
  let fixture: ComponentFixture<PublishingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
