import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSelectorComponent } from './course-selector.component';

describe('AddPanelComponent', () => {
  let component: AddPanelComponent;
  let fixture: ComponentFixture<AddPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
