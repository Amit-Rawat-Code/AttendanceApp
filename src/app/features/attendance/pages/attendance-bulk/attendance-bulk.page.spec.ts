import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendanceBulkPage } from './attendance-bulk.page';

describe('AttendanceBulkPage', () => {
  let component: AttendanceBulkPage;
  let fixture: ComponentFixture<AttendanceBulkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceBulkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
