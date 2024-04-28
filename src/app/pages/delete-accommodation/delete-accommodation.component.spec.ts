import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccommodationComponent } from './delete-accommodation.component';

describe('DeleteAccommodationComponent', () => {
  let component: DeleteAccommodationComponent;
  let fixture: ComponentFixture<DeleteAccommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteAccommodationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
