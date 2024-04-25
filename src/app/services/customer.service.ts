import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  createCustomer(customer: Customer): Observable<Customer> {
    const url = `${environment.customerURL}`;
    return this.http.post<Customer>(url, customer);
  }

  getCustomers(): Observable<Customer[]> {
    const url = `${environment.customerURL}`;
    return this.http.get<Customer[]>(url);
  }

  deleteCustomer(customerId: number): Observable<any> {
    const url = `${environment.customerURL}${customerId}`;
    return this.http.delete<any>(url);
  }

  updateCustomer(customerId: number, updatedCustomer: Customer): Observable<Customer> {
    const url = `${environment.customerURL}${customerId}`;
    return this.http.put<Customer>(url, updatedCustomer);
  }
}
