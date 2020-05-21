import { Injectable } from '@angular/core';
import { Lend, LendCompressedForPosting } from '../models/lend';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StudentsService } from './students.service'

@Injectable({
  providedIn: 'root'
})
export class LendsService {

  constructor(private http: HttpClient, private studentService: StudentsService) { }


  getLends() : Observable<Lend[]>{
    return this.http.get<Lend[]>(`${environment.apiUrl}/lends`);
  }


  createLend(lend: Lend) : Observable<void>{
    this.studentService.createStudent(lend.student).subscribe(
      (data) => {},
      (err: HttpErrorResponse) => {console.log(err)}
    );
    const postValue = new LendCompressedForPosting(lend.student.id, lend.textbook.id, lend.dateLent, lend.active);
    return this.http.post<void>(`${environment.apiUrl}/lends`, postValue);
  }

  deleteLend(lendId: number) {
    return this.http.delete<Lend>(`${environment.apiUrl}/lends/${lendId}`);
  }

  changeLendToInactive(lendId: number) {
    
  }


}
