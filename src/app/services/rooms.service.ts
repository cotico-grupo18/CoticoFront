import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  createRoom(room: Room): Observable<Room> {
    const url = `${environment}`;
    return this.http.post<Room>(url, room);
  }

  getRooms(): Observable<Room[]> {
    const url = `${environment}`;
    return this.http.get<Room[]>(url);
  }

  deleteRoom(roomId: number): Observable<any> {
    const url = `${environment}${roomId}`;
    return this.http.delete<any>(url);
  }

  updateRoom(roomId: number, updatedRoom: Room): Observable<Room> {
    const url = `${environment}${roomId}`;
    return this.http.put<Room>(url, updatedRoom);
  }
}
