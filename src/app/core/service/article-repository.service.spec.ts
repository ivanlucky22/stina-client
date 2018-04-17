import { TestBed, inject } from '@angular/core/testing';

import { ArticleRepository } from './article-repository.service';

describe('ArticleRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleRepository]
    });
  });

  it('should be created', inject([ArticleRepository], (service: ArticleRepository) => {
    expect(service).toBeTruthy();
  }));
});
