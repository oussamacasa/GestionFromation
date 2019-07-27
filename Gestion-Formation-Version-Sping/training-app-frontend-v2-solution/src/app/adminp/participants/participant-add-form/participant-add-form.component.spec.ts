import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantAddFormComponent } from './participant-add-form.component';

describe('ParticipantAddFormComponent', () => {
  let component: ParticipantAddFormComponent;
  let fixture: ComponentFixture<ParticipantAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
