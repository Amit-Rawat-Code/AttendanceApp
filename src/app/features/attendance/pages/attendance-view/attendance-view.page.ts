import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-attendance-view',
  templateUrl: './attendance-view.page.html',
  styleUrls: ['./attendance-view.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AttendanceViewPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
