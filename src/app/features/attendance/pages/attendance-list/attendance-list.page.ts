import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance';
import { Attendance } from '../../model/attendance';
import { RouterModule,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.page.html',
  standalone: true,
  imports:[CommonModule,IonicModule,RouterModule]
})
export class AttendanceListPage implements OnInit {

  records: Attendance[] = [];

  constructor(
    private service: AttendanceService,
    private router: Router
  ) {}
  // temporary data
  loadData() {
    const employeeList = [
      { id: 1, name: 'Amit' },
      { id: 2, name: 'Rahul' },
      { id: 3, name: 'Priya' }
    ];

    employeeList.forEach(emp => {
      this.records.push(
        {
          id: emp.id,
          employeeName: emp.name,
          status: 'Present',
          checkInTime: '09:00',
          checkOutTime: '18:00'
        }
      );
    });
  }
  ngOnInit() {
    this.loadData();
  }

  // loadData() {
  //   this.service.getAll().subscribe(res => {
  //     this.records = res;
  //   });
  // }

  delete(id: number) {
    this.service.delete(id).subscribe(() => {
      this.loadData();
    });
  }
}
