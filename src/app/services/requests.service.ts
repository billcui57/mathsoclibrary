import { Injectable } from '@angular/core';
import { TextbookRequest } from '../models/textbook';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http : HttpClient) { }

  createRequests(request: TextbookRequest) : Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/requests`, request);
  }

  

  
}
