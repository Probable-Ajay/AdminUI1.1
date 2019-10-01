import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingLeafComponent } from './shopping-leaf.component';

describe('ShoppingLeafComponent', () => {
  let component: ShoppingLeafComponent;
  let fixture: ComponentFixture<ShoppingLeafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingLeafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
