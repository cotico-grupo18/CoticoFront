import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Staff } from '../shared/model/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }

  createStaff(staff: Staff): Observable<Staff> {
    const url = `${environment.staffURL}/staff/`;
    return this.http.post<Staff>(url, staff);
  }

  getStaff(): Observable<Staff[]> {
    const url = `${environment.staffURL}/staff/`;
    return this.http.get<Staff[]>(url);
  }

  deleteStaff(staffId: number): Observable<any> {
    const url = `${environment.staffURL}/staff/${staffId}`;
    return this.http.delete<any>(url);
  }

  updateStaff(staffId: number, updatedStaff: Staff): Observable<Staff> {
    const url = `${environment.staffURL}/staff/${staffId}`;
    return this.http.put<Staff>(url, updatedStaff);
  }
}
