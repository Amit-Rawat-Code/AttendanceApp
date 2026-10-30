import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-attendance-edit',
  templateUrl: './attendance-edit.page.html',
  styleUrls: ['./attendance-edit.page.scss'],
  standalone: true,
  imports:[IonicModule,FormGroup]
})
export class AttendanceEditPage implements OnInit {
  editForm!: FormGroup;
  employeeId!: number;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    // Load employee from service/database
    this.loadEmployee(this.employeeId);
  }
  loadEmployee(id: number) {

    // Example static data (replace with service call)
    const employee = {
      name: 'Amit',
      status: 'Present',
      checkIn: '09:00',
      checkOut: '18:00'
    };

    this.editForm = this.fb.group({
      name: [employee.name],
      status: [employee.status],
      checkIn: [employee.checkIn],
      checkOut: [employee.checkOut]
    });
  }

  save() {
    console.log(this.editForm.value);

    // Call API / SQLite save here

    window.history.back();
  }

}
