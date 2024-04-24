import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateHotelComponent } from './pages/validate-hotel/validate-hotel.component';
import { SignupHotelComponent } from './pages/signup-hotel/signup-hotel.component';
import { SignupHotelLastStepComponent } from './pages/signup-hotel-last-step/signup-hotel-last-step.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { CreateReservationComponent } from './pages/create-reservation/create-reservation.component';
import { CreateServiceComponent } from './pages/create-service/create-service.component';
import { AccommodationsAndServicesComponent } from './pages/accommodations-and-services/accommodations-and-services.component';
import { SearchReservationsComponent } from './pages/search-reservations/search-reservations.component';

const routes: Routes = [
  {path: 'validacion_hotel', component: ValidateHotelComponent},
  {path: 'signup', component: SignupHotelComponent},
  {path: 'signup/last_step', component: SignupHotelLastStepComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'bookings', component: BookingsComponent},
  {path: 'bookings/create-service', component: CreateServiceComponent}, // Arreglar
  {path: 'acommodations-and-services', component: AccommodationsAndServicesComponent},
  {path: 'bookings/search-reservation', component: SearchReservationsComponent}, // Falta el search-services
  {path: 'bookings/search-reservation/create-reservation', component: CreateReservationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
