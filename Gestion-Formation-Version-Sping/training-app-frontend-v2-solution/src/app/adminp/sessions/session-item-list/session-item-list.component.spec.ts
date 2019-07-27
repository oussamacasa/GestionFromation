import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionItemListComponent } from './session-item-list.component';

describe('SessionItemListComponent', () => {
  let component: SessionItemListComponent;
  let fixture: ComponentFixture<SessionItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
