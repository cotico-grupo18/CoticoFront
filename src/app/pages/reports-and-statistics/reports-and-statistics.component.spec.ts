import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAndStatisticsComponent } from './reports-and-statistics.component';

describe('ReportsAndStatisticsComponent', () => {
  let component: ReportsAndStatisticsComponent;
  let fixture: ComponentFixture<ReportsAndStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportsAndStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportsAndStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
