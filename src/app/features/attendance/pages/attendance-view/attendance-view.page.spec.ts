import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendanceViewPage } from './attendance-view.page';

describe('AttendanceViewPage', () => {
  let component: AttendanceViewPage;
  let fixture: ComponentFixture<AttendanceViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
