import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialityPolicyPageComponent } from './confidentiality-policy-page.component';

describe('ConfidentialityPolicyPageComponent', () => {
  let component: ConfidentialityPolicyPageComponent;
  let fixture: ComponentFixture<ConfidentialityPolicyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidentialityPolicyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentialityPolicyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
