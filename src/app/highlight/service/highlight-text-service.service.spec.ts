import { TestBed } from '@angular/core/testing';

import { HighlightTextServiceService } from './highlight-text-service.service';

describe('HighlightTextServiceService', () => {
  let service: HighlightTextServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighlightTextServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
