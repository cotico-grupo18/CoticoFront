import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ValidateHotelComponent } from './pages/validate-hotel/validate-hotel.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { SearchReservationsComponent } from './pages/search-reservations/search-reservations.component';
import { CreateReservationComponent } from './pages/create-reservation/create-reservation.component';
import { CreateServiceComponent } from './pages/create-service/create-service.component';
import { SignupHotelComponent } from './pages/signup-hotel/signup-hotel.component';
import { SignupHotelLastStepComponent } from './pages/signup-hotel-last-step/signup-hotel-last-step.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AccommodationsAndServicesComponent } from './pages/accommodations-and-services/accommodations-and-services.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAdditonalServiceComponent } from './pages/add-additonal-service/add-additonal-service.component';
import { AddAccommodationComponent } from './pages/add-accommodation/add-accommodation.component';
import { DeleteAccommodationComponent } from './pages/delete-accommodation/delete-accommodation.component';
import { DeleteServiceComponent } from './pages/delete-service/delete-service.component';
import { CheckInComponent } from './pages/check-in/check-in.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { StaffManagementComponent } from './pages/staff-management/staff-management.component';
import { DeleteStaffComponent } from './pages/delete-staff/delete-staff.component';
import { AddStaffComponent } from './pages/add-staff/add-staff.component';


@NgModule({
  declarations: [
    AppComponent,
    ValidateHotelComponent,
    BookingsComponent,
    SearchReservationsComponent,
    CreateReservationComponent,
    CreateServiceComponent,
    SignupHotelComponent,
    SignupHotelLastStepComponent,
    SignInComponent,
    AccommodationsAndServicesComponent,
    AddAdditonalServiceComponent,
    AddAccommodationComponent,
    DeleteAccommodationComponent,
    DeleteServiceComponent,
    CheckInComponent,
    CheckOutComponent,
    StaffManagementComponent,
    DeleteStaffComponent,
    AddStaffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
