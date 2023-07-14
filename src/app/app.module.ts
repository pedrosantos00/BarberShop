import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ServicesComponent } from './Components/services/services.component';
import { BarbersComponent } from './Components/barbers/barbers.component';
import { ContactComponent } from './Components/contact/contact.component';
import { BookComponent } from './Components/book/book.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutUsComponent,
    ServicesComponent,
    BarbersComponent,
    ContactComponent,
    BookComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
