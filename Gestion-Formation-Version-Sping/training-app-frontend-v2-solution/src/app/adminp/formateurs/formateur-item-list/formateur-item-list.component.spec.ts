import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurItemListComponent } from './formateur-item-list.component';

describe('FormateurItemListComponent', () => {
  let component: FormateurItemListComponent;
  let fixture: ComponentFixture<FormateurItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormateurItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
