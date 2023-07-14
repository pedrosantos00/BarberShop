import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Appointment } from 'src/app/Models/Appointment';
import { AvailabilityTimeSlot } from 'src/app/Models/AvailabilityTimeSlot';
import { Barber } from 'src/app/Models/Barber';
import { Client } from 'src/app/Models/Client';



import { BarberService } from 'src/app/Services/barber.service';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  datePicker!: Date;

  barbers?: Barber[];
  availability! : AvailabilityTimeSlot[];
  barberAvailability!: AvailabilityTimeSlot;
  appointment : Appointment = new Appointment();

  constructor(private bookService: BookService, private barberService : BarberService) {}

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

 onDateChange(): void {
  this.datePicker.setHours(5);
  // Call the service method to get availability based on the selected date and time
  this.barberService.getBarberAvailability(this.datePicker, this.appointment.expectedTime).subscribe(
    (availability) => {
      this.availability = availability;
      // Handle the availability response data
      console.log('Availability:', this.availability);
      // Perform any additional actions you need with the availability data
    },
    (error) => {
      console.log('An error occurred:', error);
    }
  );
}


  checkService(serviceCategory : string){

    switch(serviceCategory) {
      case'Haircut':
      this.appointment.service = 'Haircut';
      this.appointment.expectedTime = 60;
      this.appointment.cost = 14;
      break;

      case'Beard Trim':
      this.appointment.service = 'Beard Trim';
      this.appointment.expectedTime = 60;
      this.appointment.cost = 14;
      break;

      case'Haircut and Beard Trim':
      this.appointment.service = 'Haircut and Beard Trim';
      this.appointment.expectedTime = 60;
      this.appointment.cost = 14;
      break;

      case'Haircut and Eyebrow Trim':
      this.appointment.service = 'Haircut and Eyebrow Trim';
      this.appointment.expectedTime = 60;
      this.appointment.cost = 14;
      break;

      case'Beard Trim and Eyebrow Trim':
      this.appointment.service = 'Beard Trim and Eyebrow Trim';
      this.appointment.expectedTime = 60;
      this.appointment.cost = 14;
      break;

      case'Haircut, Beard Trim, and Eyebrow Trim':
      this.appointment.service = 'Haircut, Beard Trim, and Eyebrow Trim';
      this.appointment.expectedTime = 60;
      this.appointment.cost = 14;
      break;
    }

    if(this.datePicker != undefined ) {
      this.onDateChange();
      this.appointment.barber.name = '';
      //reset the select field
    }
  }

  numberOnly(event : any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }


  barberSelected(barber: string) {
    if (barber == 'noPreference') {

      if(this.barberAvailability != null || this.barberAvailability != undefined) {
        // Reset for refresh dates
        this.barberAvailability = new AvailabilityTimeSlot();
      }
       // Initialize this.barberAvailability as an empty object if it's undefined
       this.barberAvailability = this.barberAvailability || {};
       this.barberAvailability.availableTimeSlots = this.barberAvailability.availableTimeSlots || [];

      // Iterate through each availability object
      this.availability?.forEach((availability) => {
        // Iterate through each date in the current availability object
        availability.availableTimeSlots.forEach((date) => {
          // Check if the date is not already present in the uniqueDates array
          if (!this.barberAvailability.availableTimeSlots.some((d) => d === date)) {
            this.barberAvailability.availableTimeSlots.push(date);
          }
        });
      });

      return;
    }

    this.barberAvailability = this.availability?.find((b) => b.barberName === barber) || new AvailabilityTimeSlot();
    }


  submit() {
    if(this.appointment.barber.name != 'noPreference') {
      this.appointment.barberId = this.barberAvailability.barberId
    }

    this.bookService.bookAnAppointment(this.appointment).subscribe(
       (ok) => {
      console.log('Appointment done:', ok);
    },
    (error) => {
      console.log('An error occurred:', error);
    }

  );
  console.log(this.appointment);

    }
 }
