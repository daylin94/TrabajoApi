import { TestBed } from '@angular/core/testing';

import { DataSkiptestService } from './data--skiptest.service';

describe('DataSkiptestService', () => {
  let service: DataSkiptestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSkiptestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
