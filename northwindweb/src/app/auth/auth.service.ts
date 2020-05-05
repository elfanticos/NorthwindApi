import { Injectable } from '@angular/core';
import { Role } from './role.enum';
import { Observable, BehaviorSubject, throwError as observableThrowError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import * as decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly authProvider: (email: string, password: string) => Observable<IServerAuthResponse>;
  authStatus = new BehaviorSubject<IAuthStatus>(defaultAuthStatus);
  constructor(
    private _httpClient: HttpClient
  ) {
    this.authProvider = this.userAuthProvider;
  }

  private userAuthProvider(email: string, password: string): Observable<IServerAuthResponse> {
    return this._httpClient.post<IServerAuthResponse>(`${environment.urlService}token`, {email, password});
  }

  login(email: string, password: string): Observable<IAuthStatus> {
    this.logout();
    const loginResponse = this.authProvider(email, password).pipe(map(value => {
      const result = decode(value.access_Token);
      return result as IAuthStatus;
    }));

    loginResponse.subscribe(res => {
        this.authStatus.next(res);
    }, err => {
      return observableThrowError(err);
    });

    return loginResponse;
  }

  logout(): void {

  }
}

interface IServerAuthResponse {
  access_Token: string;
}

export interface IAuthStatus {
  role: Role;
  primarysid: number;
  unique_name: string;
}

const defaultAuthStatus: IAuthStatus = {role: Role.None, primarysid: null, unique_name: null};