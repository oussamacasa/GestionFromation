import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurAddFormComponent } from './formateur-add-form.component';

describe('FormateurAddFormComponent', () => {
  let component: FormateurAddFormComponent;
  let fixture: ComponentFixture<FormateurAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormateurAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
