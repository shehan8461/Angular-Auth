import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students:Student[]=[
  {
    id:'fdf34334',
    std_id:'sali',
    name:'dil',
    email:'ss',
    phone:'023322',
    department:'se'
  },
  {
    id:'ff2332',
    std_id:'shee',
    name:'salii',
    email:'ss2ss',
    phone:'1123322',
    department:'ds'
  }
]
  constructor() { }

  ngOnInit(): void {
    this.students.push()
  }

}
