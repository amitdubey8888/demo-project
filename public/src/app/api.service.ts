import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  get(endpoint: any) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Credentials': 'true'
    });
    return this.http.get(`${this.url}/${endpoint}`, { headers: header });
  }

  post(endpoint: any, body: any) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Credentials': 'true'
    });
    return this.http.post(`${this.url}/${endpoint}`, body, { headers: header });
  }

  isEmail(email: any) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  isMobile(mobile: any) {
    return /^((\\+91-?)|0)?[0-9]{10}$/.test(mobile);
  }
}
