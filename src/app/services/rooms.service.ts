import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Room } from '../shared/model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  createRoom(room: Room): Observable<Room> {
    const url = `${environment.roomsURL}`;
    return this.http.post<Room>(url, room);
  }

  getRooms(): Observable<Room[]> {
    const url = `${environment.roomsURL}`;
    return this.http.get<Room[]>(url);
  }

  deleteRoom(roomId: number): Observable<any> {
    const url = `${environment.roomsURL}${roomId}`;
    return this.http.delete<any>(url);
  }

  updateRoom(roomId: number, updatedRoom: Room): Observable<Room> {
    const url = `${environment.roomsURL}${roomId}`;
    return this.http.put<Room>(url, updatedRoom);
  }
}
