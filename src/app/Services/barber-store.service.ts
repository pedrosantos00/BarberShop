import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarberStoreService {

  private role$ = new BehaviorSubject<string>("");
  private id$ = new BehaviorSubject<number>(0);

  constructor() { }

  // Get the observable for the user's role
  public getRole() {
    return this.role$.asObservable();
  }

  // Set the user's role
  public setRole(role: string) {
    this.role$.next(role);
  }

  // Set the user's ID
  public setId(id: number) {
    this.id$.next(id);
  }

  // Get the observable for the user's ID
  public getId() {
    return this.id$.asObservable();
  }

}
