import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffPerformanceService {

  constructor(private http: HttpClient) { }

  createStaffPerformance(staffPerformance: StaffPerformance): Observable<StaffPerformance> {
    const url = `${environment.staffPerformanceURL}`;
    return this.http.post<StaffPerformance>(url, staffPerformance);
  }

  getStaffPerformances(): Observable<StaffPerformance[]> {
    const url = `${environment.staffPerformanceURL}`;
    return this.http.get<StaffPerformance[]>(url);
  }

  deleteStaffPerformance(staffPerformanceId: number): Observable<any> {
    const url = `${environment.staffPerformanceURL}${staffPerformanceId}`;
    return this.http.delete<any>(url);
  }

  updateStaffPerformance(staffPerformanceId: number, updatedStaffPerformance: StaffPerformance): Observable<StaffPerformance> {
    const url = `${environment.staffPerformanceURL}${staffPerformanceId}`;
    return this.http.put<StaffPerformance>(url, updatedStaffPerformance);
  }
}
