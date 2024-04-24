import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateHotelComponent } from './validate-hotel.component';

describe('ValidateHotelComponent', () => {
  let component: ValidateHotelComponent;
  let fixture: ComponentFixture<ValidateHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidateHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
