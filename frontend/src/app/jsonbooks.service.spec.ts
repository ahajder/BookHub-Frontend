import { TestBed, inject } from '@angular/core/testing';

import { JsonbooksService } from './jsonbooks.service';

describe('JsonbooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonbooksService]
    });
  });

  it('should be created', inject([JsonbooksService], (service: JsonbooksService) => {
    expect(service).toBeTruthy();
  }));
});
