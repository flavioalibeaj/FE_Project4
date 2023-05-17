import { TestBed } from '@angular/core/testing';

import { MovieServiceService } from './movie.service';

describe('MovieService', () => {
  let service: MovieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
