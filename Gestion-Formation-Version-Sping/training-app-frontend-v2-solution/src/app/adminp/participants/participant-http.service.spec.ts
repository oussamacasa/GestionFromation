import { TestBed, inject } from '@angular/core/testing';

import { ParticipantHttpService } from './participant-http.service';

describe('ParticipantHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticipantHttpService]
    });
  });

  it('should be created', inject([ParticipantHttpService], (service: ParticipantHttpService) => {
    expect(service).toBeTruthy();
  }));
});
