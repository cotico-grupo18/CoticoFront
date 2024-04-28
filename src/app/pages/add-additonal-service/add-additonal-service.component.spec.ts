import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdditonalServiceComponent } from './add-additonal-service.component';

describe('AddAdditonalServiceComponent', () => {
  let component: AddAdditonalServiceComponent;
  let fixture: ComponentFixture<AddAdditonalServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAdditonalServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAdditonalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
