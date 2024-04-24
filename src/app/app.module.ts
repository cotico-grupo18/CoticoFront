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
import { AddAcommodationComponent } from './pages/add-acommodation/add-acommodation.component';


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
    AddAcommodationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
