import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';

import { environment } from '../../../environments/environment';
import { of, EMPTY, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    baseUrl = environment.url;
    headers: HttpHeaders;

    constructor(
        private http: HttpClient,
        @Inject('LOCALSTORAGE') private localStorage: Storage
    ) {
        const authToken = window.localStorage.getItem('token');
        this.headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    }
    getUserById(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/user/id?id=${id}`, { headers: this.headers });
    }
    proceedLogin(body: any) {
        return this.http.post(`${this.baseUrl}/signin`, body)
    }

    registerUser(body: any) {
        return this.http.post(`${this.baseUrl}/signup`, body)
    }

    logout(): void {
        this.localStorage.removeItem('token');
        this.localStorage.clear();
    }
    addTokenheader(request: HttpRequest<any>, token: any) {
        let authToken = window.localStorage.getItem('token');
        return request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + authToken?.toString) });
    }
    getCurrentUser(): any {
        return {
            token: window.localStorage.getItem('token'),
            role: window.localStorage.getItem('role'),
            isAdmin: true,
            id: window.localStorage.getItem('id'),

        };
    }
    IsLogged() {
        return localStorage.getItem("token") != null;
    }
    getUserDetails(): Observable<any> {
        return this.http.get(`${this.baseUrl}/user/details`, { headers: this.headers });
    }


}