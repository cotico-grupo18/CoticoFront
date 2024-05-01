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
import { AddAccommodationComponent } from './pages/add-accommodation/add-accommodation.component';
import { AddAdditonalServiceComponent } from './pages/add-additonal-service/add-additonal-service.component';
import { DeleteAccommodationComponent } from './pages/delete-accommodation/delete-accommodation.component';
import { DeleteServiceComponent } from './pages/delete-service/delete-service.component';
import { CheckInComponent } from './pages/check-in/check-in.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { StaffManagementComponent } from './pages/staff-management/staff-management.component';
import { DeleteStaffComponent } from './pages/delete-staff/delete-staff.component';
import { AddStaffComponent } from './pages/add-staff/add-staff.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ViewReservationComponent } from './pages/view-reservation/view-reservation.component';
import { ReportsAndStatisticsComponent } from './pages/reports-and-statistics/reports-and-statistics.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  {path: 'home', component: LandingComponent},
  {path: 'validacion_hotel', component: ValidateHotelComponent},
  {path: 'signup', component: SignupHotelComponent},
  {path: 'signup/last_step', component: SignupHotelLastStepComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'bookings', component: BookingsComponent},
  {path: 'bookings/create-service', component: CreateServiceComponent}, 
  {path: 'accommodations-and-services', component: AccommodationsAndServicesComponent},
  {path: 'bookings/search-reservation', component: SearchReservationsComponent}, 
  {path: 'bookings/search-reservation/create-reservation', component: CreateReservationComponent},
  {path: 'accommodations-and-services/add-accommodation', component: AddAccommodationComponent},
  {path: 'accommodations-and-services/add-additional-service', component: AddAdditonalServiceComponent},
  {path: 'accommodations-and-services/delete-accommodation', component: DeleteAccommodationComponent},
  {path: 'accommodations-and-services/delete-service', component: DeleteServiceComponent},
  {path: 'check-in', component: CheckInComponent},
  {path: 'check-out', component: CheckOutComponent},
  {path: 'staff-management', component: StaffManagementComponent},
  {path: 'staff-management/delete-staff', component: DeleteStaffComponent},
  {path: 'staff-management/add-staff', component: AddStaffComponent},
  {path: 'view-reservation', component: ViewReservationComponent},
  {path: 'reportsAnsStatistics', component: ReportsAndStatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
