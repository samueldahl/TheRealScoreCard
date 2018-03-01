import { TestBed, inject } from '@angular/core/testing';

import { NameListService } from './name-list.service';

describe('NameListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameListService]
    });
  });

  it('should be created', inject([NameListService], (service: NameListService) => {
    expect(service).toBeTruthy();
  }));
});
