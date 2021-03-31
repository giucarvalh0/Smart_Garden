import { TestBed } from '@angular/core/testing';

import { GardenInfoLogService } from './garden-info-log.service';

describe('GardenInfoLogService', () => {
  let service: GardenInfoLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GardenInfoLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
