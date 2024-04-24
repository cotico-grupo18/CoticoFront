import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationsAndServicesComponent } from './accommodations-and-services.component';

describe('AccommodationsAndServicesComponent', () => {
  let component: AccommodationsAndServicesComponent;
  let fixture: ComponentFixture<AccommodationsAndServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccommodationsAndServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccommodationsAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
