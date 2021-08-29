import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  userProfile: User[] = []
  myToken = 'https://api.github.com/users/';

  token = `?access_token${environment.accessToken}`

  constructor(private http: HttpClient) { }

  getUser(searchUser: any){
    interface data {
      login: any;
      name: any;
      avatar_url: any;
      location: any;
      followers: any;
      following: any;
      public_repos: any;
    }
    return new Promise <void>((resolve, reject) => {
      this.userProfile = [];
      this.http.get <data>(this.myToken + searchUser + this.token).toPromise().then(
        (results) => {this.userProfile.push(results);
          resolve();
        },
          (error) => {
            reject(error);
          }
      )
    })

  }
}
