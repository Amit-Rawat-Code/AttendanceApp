import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-attendance-bulk',
  standalone: true,
  templateUrl: './attendance-bulk.page.html',
  styleUrls: ['./attendance-bulk.page.scss'],
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class AttendanceBulkPage implements OnInit {

  attendanceForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
    this.loadEmployees();
  }

  initializeForm() {
    this.attendanceForm = this.fb.group({
      date: ['', Validators.required],
      employees: this.fb.array([])
    });
  }

  get employees(): FormArray {
    return this.attendanceForm.get('employees') as FormArray;
  }

  loadEmployees() {
    // Temporary static data (Later replace with API call)
    const employeeList = [
      { id: 1, name: 'Amit' },
      { id: 2, name: 'Rahul' },
      { id: 3, name: 'Priya' }
    ];

    employeeList.forEach(emp => {
      this.employees.push(
        this.fb.group({
          employeeId: [emp.id],
          employeeName: [emp.name],
          status: ['Present'],
          checkIn: ['09:00'],
          checkOut: ['18:00'],
          hours: [{ value: 0, disabled: true }],
          isEdit:[false]
        })
      );
    });
  }

  calculateHours(index: number) {

  const row = this.employees.at(index);

  const status = row.get('status')?.value;

  // If Absent or Leave → Reset values
  if (status === 'Absent' || status === 'Leave') {
    row.patchValue({
      checkIn: '',
      checkOut: '',
      hours: 0
    });
    return;
  }

  const checkIn = row.get('checkIn')?.value;
  const checkOut = row.get('checkOut')?.value;

  if (!checkIn || !checkOut) {
    row.get('hours')?.setValue(0);
    return;
  }

  const inTime = new Date(`1970-01-01T${checkIn}:00`);
  const outTime = new Date(`1970-01-01T${checkOut}:00`);

  const diff = (outTime.getTime() - inTime.getTime()) / (1000 * 60 * 60);

  row.get('hours')?.setValue(diff > 0 ? Number(diff.toFixed(2)) : 0);
}

toggleEdit(index: number) {
  const row = this.employees.at(index);
  const current = row.get('isEdit')?.value;
  row.get('isEdit')?.setValue(!current);
}

  submitAll() {
    if (this.attendanceForm.valid) {
      console.log(this.attendanceForm.getRawValue());
      alert('Bulk Attendance Saved');
    }
  }
}
