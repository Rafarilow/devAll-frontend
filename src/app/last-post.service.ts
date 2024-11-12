import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastPostService {

  constructor(private http: HttpClient) { }

  getLastPost(): Observable<any> {
    return this.http.get('https://api.devall.com.br/api/v1/posts/latest');
  }
}
