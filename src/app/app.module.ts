import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsListComponent } from './component/students/students-list/students-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddStudentComponent } from './component/students/add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
