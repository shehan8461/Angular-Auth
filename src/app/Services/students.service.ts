import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../model/student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseApiUrl:string=environment.baseApiUrl
  constructor(private http:HttpClient) { }

  getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.baseApiUrl+'/api/student')
  }
  addStudent(addStudentRequest : Student):Observable<Student>{
    addStudentRequest.id='00000000-0000-0000-0000-000000000000'
    return this.http.post<Student>(this.baseApiUrl + '/api/student',addStudentRequest);
   }
   getStudent(id:string):Observable<Student>{
    return this.http.get<Student> (this.baseApiUrl + '/api/student/'+id)
   }
}
