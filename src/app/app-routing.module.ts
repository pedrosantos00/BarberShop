import { NgModule } from '@angular/core';
import { RouterModule, Routes , ExtraOptions} from '@angular/router';
import { AboutUsComponent } from './Components/Mainpage/about-us/about-us.component';
import { ServicesComponent } from './Components/services/services.component';
import { BarbersComponent } from './Components/Mainpage/barbers/barbers.component';
import { ContactComponent } from './Components/Mainpage/contact/contact.component';
import { BookComponent } from './Components/Mainpage/book/book.component';
import { MainComponent } from './Components/BackOffice/main/main.component';
import { LoginComponent } from './Components/BackOffice/login/login.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [

{
  path:'about',
  component : AboutUsComponent
},
{
  path:'services',
  component : ServicesComponent
},
{
  path:'barbers',
  component : BarbersComponent
},
{
  path:'contact',
  component : ContactComponent
},
{
  path:'book',
  component : BookComponent
},

{
  path: 'admin', component: MainComponent, canActivate: [AuthGuard],data: { expectedRole: 'Admin' }, children: [

  ]
},


{ path: 'login', component: LoginComponent }

];

const routerOptions : ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling : 'enabled',
}

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
