import { Injectable } from '@angular/core';
import { Student } from '../models/student'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GeneralHttpError } from '../models/httpError';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  createStudent(student: Student): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/students`, student)
  }

  getStudentById(studentId: number): Observable<Student> {
    return this.http.get<Student>(`${environment.apiUrl}/students/${studentId}`)
  }
  
}
