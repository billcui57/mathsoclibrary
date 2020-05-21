import { Injectable } from '@angular/core';
import { Textbook } from '../models/textbook';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TextbooksService {

  constructor(private http: HttpClient) { }

  getTextbooks() :Observable<Textbook[]> {
    return this.http.get<Textbook[]>(`${environment.apiUrl}/catalogue`);
  }

  getTextbookById(textbookId: Number) {
    return this.http.get<Textbook>(`${environment.apiUrl}/catalogue/${textbookId}`);
  }

  incrementTextbookCount (textbookId: Number):Observable<void>{
    return this.http.patch<void>(`${environment.apiUrl}/catalogue/${textbookId}`, { "op": "increment_count"});
  }

  decrementTextbookCount (textbookId: Number):Observable<void>{
    return this.http.patch<void>(`${environment.apiUrl}/catalogue/${textbookId}`, { "op": "decrement_count"});
  }

}
