/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HackerNewsAPIService } from './hackernews-api.service';

describe('Service: HackernewsApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackerNewsAPIService]
    });
  });

  it('should ...', inject([HackerNewsAPIService], (service: HackerNewsAPIService) => {
    expect(service).toBeTruthy();
  }));
});
