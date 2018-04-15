import { TestBed, inject } from '@angular/core/testing';

import { ArticlePublisherService } from './article-publisher.service';

describe('ArticlePublisherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlePublisherService]
    });
  });

  it('should be created', inject([ArticlePublisherService], (service: ArticlePublisherService) => {
    expect(service).toBeTruthy();
  }));
});
