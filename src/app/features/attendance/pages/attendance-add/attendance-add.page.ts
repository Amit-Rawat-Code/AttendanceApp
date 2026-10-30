import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';
import {IonicModule} from '@ionic/angular'
import {Calculations} from '../../helpers/calculations';
import { Router } from '@angular/router';
import { AttendanceService } from '../../services/attendance';

@Component({
  selector: 'app-attendance-add',
  templateUrl: './attendance-add.page.html',
  styleUrls: ['./attendance-add.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule,IonicModule, CommonModule, FormsModule]
})
export class AttendanceAddPage implements OnInit {

  attendanceForm: FormGroup;

  constructor(private fb: FormBuilder,private calculate:Calculations) {
    this.attendanceForm = this.fb.group({
      employeeName: ['', Validators.required],
      date: ['', Validators.required],
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      status: ['Present', Validators.required],
      remarks: ['']
    });
  }

  submitForm() {
    if (this.attendanceForm.valid) {
      console.log(this.attendanceForm.value);
      alert('Attendance Saved Successfully');
    }
  }
  ngOnInit() {
  }

}
