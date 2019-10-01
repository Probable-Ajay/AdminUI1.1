import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingStatsComponent } from './shopping-stats.component';

describe('ShoppingStatsComponent', () => {
  let component: ShoppingStatsComponent;
  let fixture: ComponentFixture<ShoppingStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
