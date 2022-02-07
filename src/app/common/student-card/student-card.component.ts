import { Component, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/models/student';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  @Input() student: Student = {
    city: '',
    company: '',
    email: '',
    firstName: '',
    grades: [],
    id: '',
    lastName: '',
    pic: '',
    skill: '',
    tags: []
  };

  @Output() addTagToList = new EventEmitter();
  addTag: string = ''


  showTestScores = false;

  constructor() { }

  ngOnInit(): void {
    let average = 0;
    for (let i = 0; i < this.student.grades.length; i++) {
      average += parseInt(this.student.grades[i]);
    }
    this.student.average = average / this.student.grades.length;
  }

  addStudentTag() {
    this.addTagToList.emit(this.addTag);
    this.addTag = '';
  }
}
