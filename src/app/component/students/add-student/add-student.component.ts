import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student.model';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService :StudentsService,private router:Router) { }

  addStudentRequest:Student={
  id:'',
  std:'',
  name:'',
  email:'',
  phone:'',
  department:''
}
  ngOnInit(): void {
  }
 addStudent(){
  this.studentService.addStudent(this.addStudentRequest)
  .subscribe({
    next:(student)=>{
     this.router.navigate([''])
    }
  })
 }
}
