import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private UrlApi = "https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  getAll():Observable<string[]>{
    return this.http.get<string[]>(this.UrlApi);
  }
}
