import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdditionalServiceService {

  constructor(private http: HttpClient) { }

  createAdditionalService(additionalService: AdditionalService): Observable<AdditionalService> {
    const url = `${environment}`;
    return this.http.post<AdditionalService>(url, additionalService);
  }

  getAdditionalServices(): Observable<AdditionalService[]> {
    const url = `${environment}`;
    return this.http.get<AdditionalService[]>(url);
  }

  deleteAdditionalService(additionalServiceId: number): Observable<any> {
    const url = `${environment}${additionalServiceId}`;
    return this.http.delete<any>(url);
  }

  updateAdditionalService(additionalServiceId: number, updatedAdditionalService: AdditionalService): Observable<AdditionalService> {
    const url = `${environment}${additionalServiceId}`;
    return this.http.put<AdditionalService>(url, updatedAdditionalService);
  }
}
