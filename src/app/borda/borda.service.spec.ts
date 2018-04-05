import { TestBed, inject } from '@angular/core/testing';

import { BordaService } from './borda.service';

describe('BordaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BordaService]
    });
  });

  it('should be created', inject([BordaService], (service: BordaService) => {
    expect(service).toBeTruthy();
  }));
});
