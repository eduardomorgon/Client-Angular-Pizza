import { TestBed, inject } from '@angular/core/testing';

import { BordasService } from './bordas.service';

describe('BordasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BordasService]
    });
  });

  it('should be created', inject([BordasService], (service: BordasService) => {
    expect(service).toBeTruthy();
  }));
});
