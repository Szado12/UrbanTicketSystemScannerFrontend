import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupErrorValidationComponent } from './popup-error-validation.component';

describe('PopupErrorValidationComponent', () => {
  let component: PopupErrorValidationComponent;
  let fixture: ComponentFixture<PopupErrorValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupErrorValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupErrorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
