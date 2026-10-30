import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MonthlySummaryService {

  generateSummary(attendanceList: any[]) {

    const summary: any = {};

    attendanceList.forEach(record => {

      record.employees.forEach((emp: any) => {

        if (!summary[emp.employeeId]) {
          summary[emp.employeeId] = {
            name: emp.employeeName,
            totalDays: 0,
            totalHours: 0
          };
        }

        if (emp.status === 'Present') {
          summary[emp.employeeId].totalDays += 1;
          summary[emp.employeeId].totalHours += emp.hours;
        }

      });

    });

    return summary;
  }
}

