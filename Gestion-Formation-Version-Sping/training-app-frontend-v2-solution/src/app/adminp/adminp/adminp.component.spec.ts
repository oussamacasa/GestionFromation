import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpComponent } from './adminp.component';

describe('AdminpComponent', () => {
  let component: AdminpComponent;
  let fixture: ComponentFixture<AdminpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
