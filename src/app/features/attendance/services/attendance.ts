import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendance } from '../model/attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  baseUrl = 'https://yourapi/api/attendance';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Attendance[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Attendance>(`${this.baseUrl}/${id}`);
  }

  add(data: Attendance) {
    return this.http.post(this.baseUrl, data);
  }

  update(id: number, data: Attendance) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
