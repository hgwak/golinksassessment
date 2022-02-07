import { StudentsService } from './services/students.service';
import { Students } from './models/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  studentList: Students = {students: []};
  filter: string = '';
  tag: string = '';


  constructor(
    public studentService: StudentsService
  ) {

  }

  ngOnInit() {
    this.studentService.getStudentList().subscribe((response)=>{
      this.studentList = response;
    })
  }

  filterList() {
    this.studentList.students.forEach((item)=>{
      const name = item.firstName + ' ' + item.lastName;
      if (this.filter && name.toLowerCase().includes(this.filter.toLowerCase())) {
        return item.filterStatus = true;
      } else {
        return item.filterStatus = false;
      }
    })
  }
  //separated for readability
  filterTag() {
    this.studentList.students.forEach((item)=>{
      if (item.tags) {
        for (let i = 0; i < item.tags.length; i++) {
          if (item.tags[i].toLowerCase() === this.tag.toLowerCase()) {
            item.tagStatus = true;
            break;
          } else {
            item.tagStatus = false;
          }
        }
      } else {
        item.tagStatus = false;
        return;
      }
    })
  }

  identify(index: any, item: any) {
    return item.id;
  }

  addTagToStudent(event: string, student: any) {
    if (!student.tags) {
      student.tags = [];
    }
    student.tags.push(event);
  }

  checkFilters(student: any) {
    if (this.filter === '' && this.tag === '') return true;
    if (student.filterStatus && student.tagStatus || this.filter === '' && student.tagStatus || this.tag === '' && student.filterStatus) {
      return true;
    } else {
      return false;
    }
  }
}
