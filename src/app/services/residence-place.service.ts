import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResidencePlaceService {

  constructor(private http: HttpClient) { }
  
  createResidencePlace(residencePlace: ResidencePlace): Observable<ResidencePlace> {
    const url = `${environment}`;
    return this.http.post<ResidencePlace>(url, residencePlace);
  }

  getResidencePlaces(): Observable<ResidencePlace[]> {
    const url = `${environment}`;
    return this.http.get<ResidencePlace[]>(url);
  }

  deleteResidencePlace(residencePlaceId: number): Observable<any> {
    const url = `${environment}${residencePlaceId}`;
    return this.http.delete<any>(url);
  }

  updateResidencePlace(residencePlaceId: number, updatedResidencePlace: ResidencePlace): Observable<ResidencePlace> {
    const url = `${environment}${residencePlaceId}`;
    return this.http.put<ResidencePlace>(url, updatedResidencePlace);
  }
}
