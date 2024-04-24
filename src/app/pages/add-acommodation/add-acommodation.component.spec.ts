import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcommodationComponent } from './add-acommodation.component';

describe('AddAcommodationComponent', () => {
  let component: AddAcommodationComponent;
  let fixture: ComponentFixture<AddAcommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAcommodationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAcommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
