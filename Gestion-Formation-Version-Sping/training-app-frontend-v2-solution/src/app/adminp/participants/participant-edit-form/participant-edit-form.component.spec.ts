import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantEditFormComponent } from './participant-edit-form.component';

describe('ParticipantEditFormComponent', () => {
  let component: ParticipantEditFormComponent;
  let fixture: ComponentFixture<ParticipantEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
