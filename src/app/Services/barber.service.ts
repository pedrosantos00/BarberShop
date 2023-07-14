import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Barber } from '../Models/Barber';

@Injectable({
  providedIn: 'root'
})
export class BarberService {

  baseUrl : string = "https://localhost:7043/api/Barber/";
  constructor(private http: HttpClient, private router: Router) { }

  GetBarbers() {
    return this.http.get<Barber[]>(`${this.baseUrl}getBarbers`)
   }
  }
