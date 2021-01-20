import { TestBed } from '@angular/core/testing';

import { MoralsService } from './morals.service';

describe('MoralsService', () => {
  let service: MoralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoralsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
