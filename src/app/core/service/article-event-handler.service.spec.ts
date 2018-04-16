import { TestBed, inject } from '@angular/core/testing';

import { ArticleEventHandlerService } from './article-event-handler.service';

describe('ArticleEventHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleEventHandlerService]
    });
  });

  it('should be created', inject([ArticleEventHandlerService], (service: ArticleEventHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
