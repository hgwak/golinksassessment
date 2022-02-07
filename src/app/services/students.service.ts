import { Students } from './../models/student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient
  ) { }

  getStudentList() {
    return this.http.get<Students>('https://api.hatchways.io/assessment/students');
  }
}
