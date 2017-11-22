import { TestBed, inject } from '@angular/core/testing';

import { PlaceOrderService } from './place-order.service';

describe('PlaceOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceOrderService]
    });
  });

  it('should be created', inject([PlaceOrderService], (service: PlaceOrderService) => {
    expect(service).toBeTruthy();
  }));
});
