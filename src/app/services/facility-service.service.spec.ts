import { TestBed, inject } from '@angular/core/testing';

import { FacilityServiceService } from './facility-service.service';

describe('FacilityServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacilityServiceService]
    });
  });

  it('should be created', inject([FacilityServiceService], (service: FacilityServiceService) => {
    expect(service).toBeTruthy();
  }));
});
