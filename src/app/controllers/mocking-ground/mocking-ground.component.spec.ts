import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockingGroundComponent } from './mocking-ground.component';

describe('MockingGroundComponent', () => {
  let component: MockingGroundComponent;
  let fixture: ComponentFixture<MockingGroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockingGroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockingGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
