import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(private http: HttpClient) { }

  createMessaging(messaging: Messaging): Observable<Messaging> {
    const url = `${environment}`;
    return this.http.post<Messaging>(url, messaging);
  }

  getMessagings(): Observable<Messaging[]> {
    const url = `${environment}`;
    return this.http.get<Messaging[]>(url);
  }

  deleteMessaging(messagingId: number): Observable<any> {
    const url = `${environment}${messagingId}`;
    return this.http.delete<any>(url);
  }

  updateMessaging(messagingId: number, updatedMessaging: Messaging): Observable<Messaging> {
    const url = `${environment}${messagingId}`;
    return this.http.put<Messaging>(url, updatedMessaging);
  }
}
