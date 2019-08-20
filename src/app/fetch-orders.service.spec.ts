import { TestBed } from '@angular/core/testing';

import { FetchOrdersService } from './fetch-orders.service';

describe('FetchOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchOrdersService = TestBed.get(FetchOrdersService);
    expect(service).toBeTruthy();
  });
});
