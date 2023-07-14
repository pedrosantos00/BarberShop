import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AvailabilityTimeSlot } from '../Models/AvailabilityTimeSlot';
import { Appointment } from '../Models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl : string = "https://localhost:7043/api/Appointment/";
  constructor(private http: HttpClient, private router: Router) { }


  bookAnAppointment(appointment : Appointment){
    return this.http.post<Appointment>(`${this.baseUrl}BookAnAppointment`,appointment )
  }

}
