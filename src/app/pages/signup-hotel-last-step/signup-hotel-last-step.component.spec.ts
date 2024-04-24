import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupHotelLastStepComponent } from './signup-hotel-last-step.component';

describe('SignupHotelLastStepComponent', () => {
  let component: SignupHotelLastStepComponent;
  let fixture: ComponentFixture<SignupHotelLastStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupHotelLastStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupHotelLastStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
