import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AvailabilityTimeSlot } from '../Models/AvailabilityTimeSlot';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl : string = "https://localhost:7043/api/Barber/";
  constructor(private http: HttpClient, private router: Router) { }

  GetBarberAvailability(date: Date, time : number) {
    return this.http.get<AvailabilityTimeSlot[]>(`${this.baseUrl}GetAvailabilityByDate`, {
      params: {
        desiredDate: date.toISOString().split('T')[0],
        appointmentDuration: time
      }
    });
  }

}
