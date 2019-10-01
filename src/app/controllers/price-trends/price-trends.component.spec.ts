import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTrendsComponent } from './price-trends.component';

describe('PriceTrendsComponent', () => {
  let component: PriceTrendsComponent;
  let fixture: ComponentFixture<PriceTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
