import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAgreementPageComponent } from './user-agreement-page.component';

describe('UserAgreementPageComponent', () => {
  let component: UserAgreementPageComponent;
  let fixture: ComponentFixture<UserAgreementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAgreementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAgreementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
