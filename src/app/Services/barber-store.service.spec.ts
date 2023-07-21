import { TestBed } from '@angular/core/testing';

import { BarberStoreService } from './barber-store.service';

describe('BarberStoreService', () => {
  let service: BarberStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarberStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
