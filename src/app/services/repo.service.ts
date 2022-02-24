import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  org: string = 'Netflix';

  constructor(
    private http: HttpClient
  ) { }

  getRepoList(org: string) {
    return this.http.get(`https://api.github.com/orgs/${org}/repos`);
  }
  getCommitsList(org: string, repo: string) {
    return this.http.get(`https://api.github.com/repos/${org}/${repo}/commits`)
  }
}
