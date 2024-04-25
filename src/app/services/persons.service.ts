import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    const url = `${environment.personsURL}`;
    return this.http.get<Person[]>(url);
  }

  createPerson(person: Person): Observable<Person> {
    const url = `${environment.personsURL}`;
    return this.http.post<Person>(url, person);
  }

  deletePerson(personId: number): Observable<any> {
    const url = `${environment.personsURL}${personId}`;
    return this.http.delete<any>(url);
  }

  updatePerson(personId: number, updatedPerson: Person): Observable<Person> {
    const url = `${environment.personsURL}${personId}`;
    return this.http.put<Person>(url, updatedPerson);
  }

}
