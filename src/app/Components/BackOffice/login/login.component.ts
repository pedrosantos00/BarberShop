import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Barber } from 'src/app/Models/Barber';
import { AuthService } from 'src/app/Services/auth.service';
import { BarberStoreService } from 'src/app/Services/barber-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router, private auth : AuthService , private barberStoreService : BarberStoreService) {
  }

  barber : Barber = new Barber;

  onLogin() {
    // Perform login if the form is valid
      this.auth.login(this.barber)
        .subscribe({
          next: (res) => {
            this.auth.storeToken(res.accessToken);
            this.auth.storeRefreshToken(res.refreshToken);
            const tokenPayload = this.auth.decodedToken();
            this.barberStoreService.setRole(tokenPayload.role);
            this.barberStoreService.setId(tokenPayload.id)
            this.router.navigate(['/admin']);
          },
          error: (err) => {
            alert("Error!")
          }
        })
      }
    }
