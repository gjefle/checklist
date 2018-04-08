import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistInfoComponent } from './checklist-info.component';

describe('ChecklistInfoComponent', () => {
  let component: ChecklistInfoComponent;
  let fixture: ComponentFixture<ChecklistInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
