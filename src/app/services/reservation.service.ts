import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  createReservation(reservation: Reservation): Observable<Reservation> {
    const url = `${environment}`;
    return this.http.post<Reservation>(url, reservation);
  }

  getReservations(): Observable<Reservation[]> {
    const url = `${environment}`;
    return this.http.get<Reservation[]>(url);
  }

  deleteReservation(reservationId: number): Observable<any> {
    const url = `${environment}${reservationId}`;
    return this.http.delete<any>(url);
  }

  updateReservation(reservationId: number, updatedReservation: Reservation): Observable<Reservation> {
    const url = `${environment}${reservationId}`;
    return this.http.put<Reservation>(url, updatedReservation);
  }
}
