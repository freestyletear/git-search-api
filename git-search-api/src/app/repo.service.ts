// import { Repos } from 'src/app/repos';
// import { environment } from './../environments/environment';
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class RepoService {
//   repo:Repos[]=[];
//   apiURL= 'https://api.github.com/users/';
//   token=`?access_token=${environment.accessToken}`

//   constructor(public http:HttpClient) { }

//   getRepo(searchTerm:string):Observable<any>{
//     interface data {
//       description:any;
//       name:any;
//       owner:any;
//       viewers:any;
//       forks:any;
//       default_branch:any;
//       language:any;
//       html_url: any;
//       watchers: any;
//       created_at: any;
//       forks_count: any;
//     }
//     return this.http.get(this.apiURL + searchTerm+ '/repos'+ this.token);
//   }
// }
