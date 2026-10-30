import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendanceEditPage } from './attendance-edit.page';

describe('AttendanceEditPage', () => {
  let component: AttendanceEditPage;
  let fixture: ComponentFixture<AttendanceEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
