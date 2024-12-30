import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {
  private baseUrl = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  getUsers(){
    console.log("hi")
    return this.http.get(this.baseUrl, { responseType: 'text' });
  }
}
