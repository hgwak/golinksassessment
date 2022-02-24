import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { RepoService } from '../../services/repo.service';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent implements OnInit {

  @Input() repo: any;

  addTag: string = ''
  commitList: any = [];

  showCommits = false;

  constructor(
    private repoService: RepoService
  ) { }

  ngOnInit(): void {
  }

  getCommitList() {
    if (!this.showCommits) return;
    this.repoService.getCommitsList(this.repoService.org, this.repo.name).subscribe((item: any)=>{
      this.commitList = item;
      console.log(this.commitList);
    })
  }
}
