import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccommodationsService {

  constructor(private http: HttpClient) { }

  createAccommodation(accommodation: Accommodation): Observable<Accommodation> {
    const url = `${environment.accommodationsURL}`;
    return this.http.post<Accommodation>(url, accommodation);
  }

  getAccommodations(): Observable<Accommodation[]> {
    const url = `${environment.accommodationsURL}`;
    return this.http.get<Accommodation[]>(url);
  }

  deleteAccommodation(accommodationName: string): Observable<any> {
    const url = `${environment.accommodationsURL}${accommodationName}`;
    return this.http.delete<any>(url);
  }

  updateAccommodation(accommodationName: string, updatedAccommodation: Accommodation): Observable<Accommodation> {
    const url = `${environment.accommodationsURL}${accommodationName}`;
    return this.http.put<Accommodation>(url, updatedAccommodation);
  }
}
