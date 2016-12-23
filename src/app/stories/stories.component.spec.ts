/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { StoriesComponent } from './stories.component';

import { HackerNewsAPIService } from '../services/hackernews-api.service';
import { ActivatedRoute } from '@angular/router';
// Routes
import { routing } from '../app.routes';

describe('Component: Stories', () => {
  it('should create an instance', () => {
    let component = new StoriesComponent();
    expect(component).toBeTruthy();
  });
});
