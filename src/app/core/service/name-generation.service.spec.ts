import { TestBed, inject } from '@angular/core/testing';

import { NameGenerationService } from './name-generation.service';

describe('NameGenerationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameGenerationService]
    });
  });

  it('should be created', inject([NameGenerationService], (service: NameGenerationService) => {
    expect(service).toBeTruthy();
  }));
});
