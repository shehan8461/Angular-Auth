import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './component/students/students-list/students-list.component';
import { AddStudentComponent } from './component/students/add-student/add-student.component';
import { EditStudentComponent } from './component/students/edit-student/edit-student.component';

const routes: Routes = [
  {
    path:'',
    component:StudentsListComponent
  },
  {
    path:'students/add',
    component:AddStudentComponent
  },
  {
    path:'students/edit/:id',
    component:EditStudentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
