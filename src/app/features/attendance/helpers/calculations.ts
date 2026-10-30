import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Calculations {
 constructor(){}
 calculateWorkingHours(checkIn: string, checkOut: string): number {

    if (!checkIn || !checkOut) return 0;

    const inTime = new Date(checkIn);
    const outTime = new Date(checkOut);

    const diffMs = outTime.getTime() - inTime.getTime();

    if (diffMs <= 0) return 0;

    const hours = diffMs / (1000 * 60 * 60);

    return Number(hours.toFixed(2));
  } 
}
