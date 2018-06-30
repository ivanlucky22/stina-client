import { TestBed, inject } from '@angular/core/testing';

import { LabelRepositoryService } from './label-repository.service';

describe('LabelRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabelRepositoryService]
    });
  });

  it('should be created', inject([LabelRepositoryService], (service: LabelRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
