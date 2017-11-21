import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceOrderPageComponent } from './place-order-page.component';

describe('PlaceOrderPageComponent', () => {
  let component: PlaceOrderPageComponent;
  let fixture: ComponentFixture<PlaceOrderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceOrderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
