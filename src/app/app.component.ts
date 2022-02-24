import { RepoService } from './services/repo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  repoList: any = [];
  filter: string = '';
  tag: string = '';


  constructor(
    public repoService: RepoService
  ) {

  }

  ngOnInit() {
    this.repoService.getRepoList('Netflix').subscribe((response: any)=>{
      this.repoList = response.sort((a: any, b: any)=>{
        return b.stargazers_count - a.stargazers_count;
      });
    })
  }

  identify(index: any, item: any) {
    return item.id;
  }

  searchOrg() {
    //use debouncetime here later
    this.repoService.org = this.filter;
    this.repoService.getRepoList(this.filter).subscribe((response: any)=>{
      this.repoList = response.sort((a: any, b: any)=>{
        return b.stargazers_count - a.stargazers_count;
      });
    })
  }
}
