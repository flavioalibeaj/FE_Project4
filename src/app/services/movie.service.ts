import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any>{
    return this.http.get<any>("https://api.mockaroo.com/api/359a0580?count=500&key=a9af2040")
  }
}
