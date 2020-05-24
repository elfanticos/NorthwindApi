import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from '../models/customer';
import { environment } from 'src/environments/environment';

@Injectable()
export class CustomerService {

  constructor(
    private _http: HttpClient
  ) { }

  getCustomerList(page: number, rows: number): Observable<ICustomer[]> {
    return this._http.get<ICustomer[]>(`${environment.urlService}/customer/GetPaginatedCustomer/${page}/${rows}`);
  }
}
