import { TestBed, inject } from '@angular/core/testing';

import { FakeSessionItemService } from './fake-session-item.service';

describe('FakeSessionItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeSessionItemService]
    });
  });

  it('should be created', inject([FakeSessionItemService], (service: FakeSessionItemService) => {
    expect(service).toBeTruthy();
  }));
});
