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
}
