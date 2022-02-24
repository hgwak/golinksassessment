import { RepoCardComponent } from './repo-card/repo-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RepoCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RepoCardComponent
  ]
})
export class AppCommonModule { }
