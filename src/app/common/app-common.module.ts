import { StudentCardComponent } from './student-card/student-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StudentCardComponent
  ]
})
export class AppCommonModule { }
