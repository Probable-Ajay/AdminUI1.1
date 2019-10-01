import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRoutesComponent } from './dashboard-routes.component';

describe('DashboardRoutesComponent', () => {
  let component: DashboardRoutesComponent;
  let fixture: ComponentFixture<DashboardRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
