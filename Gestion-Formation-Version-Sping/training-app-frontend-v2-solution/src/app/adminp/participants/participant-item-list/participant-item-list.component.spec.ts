import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantItemListComponent } from './participant-item-list.component';

describe('ParticipantItemListComponent', () => {
  let component: ParticipantItemListComponent;
  let fixture: ComponentFixture<ParticipantItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
