import { Repos } from 'src/app/repos';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  repo:Repos;
  apiURL= 'https://api.github.com/users/';
  token=`?access_token=${environment.accessToken}`

  constructor(public http:HttpClient) {
    this.repo = new Repos('','','','','','','','','','','')
  }

  getRepo(searchTerm:string){
    interface repodata {
      description:any;
      name:any;
      forks:any;
      html_url: any;
      watchers: any;
      created_at: any;
      open_issue: any;
    }
    // https://api.github.com/users/freestyletear/repos?access_token=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

    return new Promise <void>((resolve, reject) => {
      this.http.get <repodata>(this.apiURL + searchTerm + '/repos' + this.token).toPromise().then(
        (results) => {this.repo = results;
          resolve();
        },
          (error) => {
            reject(error);
          }
      )
    })
  }
}