import { Injectable } from '@angular/core';
import { Student } from '../models/student'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


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
