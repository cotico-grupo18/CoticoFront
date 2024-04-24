import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupHotelComponent } from './signup-hotel.component';

describe('SignupHotelComponent', () => {
  let component: SignupHotelComponent;
  let fixture: ComponentFixture<SignupHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
