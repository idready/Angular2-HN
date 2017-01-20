/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HackerNewsAPIService } from '../services/hackernews-api.service';

import { ItemCommentsComponent } from './item-comments.component';

describe('Component: ItemComments', () => {
  it('should create an instance', () => {
    let hackerService: HackerNewsAPIService;
    let route: ActivatedRoute;
    
    let component = new ItemCommentsComponent(hackerService, route);
    expect(component).toBeTruthy();
  });
});
