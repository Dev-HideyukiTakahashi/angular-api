import { TestBed } from '@angular/core/testing';

import { MusicsService } from './musics.service';

describe('MusicsService', () => {
  let service: MusicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
