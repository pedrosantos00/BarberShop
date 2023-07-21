import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Mainpage/header/header.component';
import { NavbarComponent } from './Components/Mainpage/navbar/navbar.component';
import { AboutUsComponent } from './Components/Mainpage/about-us/about-us.component';
import { ServicesComponent } from './Components/services/services.component';
import { BarbersComponent } from './Components/Mainpage/barbers/barbers.component';
import { ContactComponent } from './Components/Mainpage/contact/contact.component';
import { BookComponent } from './Components/Mainpage/book/book.component';
import { FooterComponent } from './Components/Mainpage/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { MainComponent } from './Components/BackOffice/main/main.component';
import { LoginComponent } from './Components/BackOffice/login/login.component';
import { TokenInterceptor } from './Interceptors/token.interceptor';




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
    FooterComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
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
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
