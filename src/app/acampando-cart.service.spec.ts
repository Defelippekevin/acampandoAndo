import { TestBed } from '@angular/core/testing';

import { AcampandoCartService } from './acampando-cart.service';

describe('AcampandoCartService', () => {
  let service: AcampandoCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcampandoCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
