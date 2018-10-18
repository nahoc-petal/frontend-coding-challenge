import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  private apiUrl = 'https://cloudplatform.coveo.com/rest/search?access_token=058c85fd-3c79-42a3-9236-b83d35588103';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getDrinks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
