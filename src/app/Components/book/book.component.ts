import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AvailabilityTimeSlot } from 'src/app/Models/AvailabilityTimeSlot';
import { Barber } from 'src/app/Models/Barber';
import { Service } from 'src/app/Models/service';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  serviceCategory!: string;
  datePicker!: Date;
  barber!: string;
  scheduleTime!: string;

  barbers?: Barber[];
  availability! : AvailabilityTimeSlot[];
  barberAvailability!: AvailabilityTimeSlot;
  service: Service = new Service();

  constructor(private bookService: BookService) {}

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  onDateChange(selectedDate: Date, time? : number): void {
    // Call the service method to get availability based on selected date
    this.bookService.GetBarberAvailability(selectedDate,this.service.serviceTime).subscribe(
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
      this.service.serviceName = serviceCategory;
      this.service.serviceTime = 45;
      this.service.serviceCost = 14;
      break;

      case'Beard Trim':
      this.service.serviceName = serviceCategory;
      this.service.serviceTime = 30;
      this.service.serviceCost = 10;
      break;

      case'Haircut and Beard Trim':
      this.service.serviceName = serviceCategory;
      this.service.serviceTime = 60;
      this.service.serviceCost = 20;
      break;

      case'Haircut and Eyebrow Trim':
      this.service.serviceName = serviceCategory;
      this.service.serviceTime = 45;
      this.service.serviceCost = 16;
      break;

      case'Beard Trim and Eyebrow Trim':
      this.service.serviceName = 'Haircut';
      this.service.serviceTime = 30;
      this.service.serviceCost = 12;
      break;

      case'Haircut, Beard Trim, and Eyebrow Trim':
      this.service.serviceName = serviceCategory;
      this.service.serviceTime = 60;
      this.service.serviceCost = 22;
      break;

    }
    if(this.datePicker != undefined ) {
      this.onDateChange(this.datePicker, this.service.serviceTime);
      this.barber = '';
      //reset the select field
    }
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
    console.log(this.service);
  }
}
