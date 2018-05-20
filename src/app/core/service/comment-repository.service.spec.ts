import { TestBed, inject } from '@angular/core/testing';

import { CommentRepositoryService } from './comment-repository.service';

describe('CommentRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentRepositoryService]
    });
  });

  it('should be created', inject([CommentRepositoryService], (service: CommentRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
