import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getPeople(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?${query}`);
  }

  getDetails(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/details/${id}`);
  }
}
