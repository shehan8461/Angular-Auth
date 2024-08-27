import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Student } from 'src/app/model/student.model';
import { StudentsService } from 'src/app/Services/students.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students:Student[]=[]
  searchTerm: string = '';
  filteredStudents: any[] = [];
  constructor(private studentsService:StudentsService) { }

 

  ngOnInit(): void {
 
      this.studentsService.getAllStudents()
      .subscribe({
        next:(students)=>{
        this.students=students
        this.filteredStudents=students
        },
        error:(response)=>{
          console.log(response)
        }
      })
  }
  searchStudent(): void {
    if (this.searchTerm) {
      this.filteredStudents = this.students.filter(student => 
        student.std.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredStudents = this.students;
    }
  }
  generatePDF(): void {
    // Hide the "Actions" header
    const tableHeader = document.querySelectorAll('th');
    tableHeader.forEach(header => {
      if (header.textContent === 'Actions') {
        (header as HTMLElement).style.display = 'none';
      }
    });
  
    // Hide all "Actions" column cells
    const actionCells = document.querySelectorAll('td:last-child');
    actionCells.forEach(cell => {
      (cell as HTMLElement).style.display = 'none';
    });
  
    // Capture the table and generate the PDF
    const element = document.getElementById('student-table');
    html2canvas(element!).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('students-report.pdf');
  
      // Restore the "Actions" header
      tableHeader.forEach(header => {
        if (header.textContent === 'Actions') {
          (header as HTMLElement).style.display = '';
        }
      });
  
      // Restore all "Actions" column cells
      actionCells.forEach(cell => {
        (cell as HTMLElement).style.display = '';
      });
    });
  }
  
}
