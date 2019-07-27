import { TestBed, inject } from '@angular/core/testing';

import { FormateurHttpService } from './formateur-http.service';

describe('FormateurHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormateurHttpService]
    });
  });

  it('should be created', inject([FormateurHttpService], (service: FormateurHttpService) => {
    expect(service).toBeTruthy();
  }));
});
