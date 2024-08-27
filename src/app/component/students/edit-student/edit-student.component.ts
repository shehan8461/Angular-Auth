import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { Student } from 'src/app/model/student.model';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  studentDetails:Student ={
    id:'',
    std:'',
  name:'',
  email:'',
  phone:'',
  department:''
  }
  constructor( private route:ActivatedRoute,private studentService:StudentsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id=params.get('id');
        if(id){
          this.studentService.getStudent(id)
          .subscribe({
            next:(response)=>{
              this.studentDetails=response
            }
          })
        }
      }
    })
  }

}
