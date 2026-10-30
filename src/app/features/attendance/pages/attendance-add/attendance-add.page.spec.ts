import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendanceAddPage } from './attendance-add.page';

describe('AttendanceAddPage', () => {
  let component: AttendanceAddPage;
  let fixture: ComponentFixture<AttendanceAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
