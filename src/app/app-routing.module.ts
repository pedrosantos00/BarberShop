import { NgModule } from '@angular/core';
import { RouterModule, Routes , ExtraOptions} from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ServicesComponent } from './Components/services/services.component';
import { BarbersComponent } from './Components/barbers/barbers.component';
import { ContactComponent } from './Components/contact/contact.component';
import { BookComponent } from './Components/book/book.component';

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
