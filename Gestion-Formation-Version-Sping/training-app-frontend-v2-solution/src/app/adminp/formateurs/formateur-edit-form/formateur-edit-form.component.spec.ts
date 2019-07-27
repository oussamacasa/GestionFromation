import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurEditFormComponent } from './formateur-edit-form.component';

describe('FormateurEditFormComponent', () => {
  let component: FormateurEditFormComponent;
  let fixture: ComponentFixture<FormateurEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormateurEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
