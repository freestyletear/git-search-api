import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; /* I ADDED THIS */
/* THE TOP HERE LOOKED LIKE THIS import { Http, Headers } from '@angular/http'; */

import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username:string;
  private clientid = '91926362a7faa8f0bf9d'; /* IT WAS LIKE f3571d8e55e169540825 */
  private clientsecret = 'd14d889fa7333ef73c6eb1c6d2ec94e7f58c0224 '; /* IT WAS LIKE a6c2b7d8f7c691e771b1908873e1322028e097c4 */

  /* BOTTOM HERE WAS LIKE THIS constructor(private http:Http) */
  constructor(private httpClient:HttpClient) { 
  	console.log("service is now ready!");
  	this.username = 'freestyletear'; /* THIS WAS kirandash */
  }

  getProfileInfo(){
    // return this.httpClient.get("https://api.github.com/users/${username}/repos?client_id=${clientid}&client_secret=${clientsecret})
    return this.httpClient.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }
  getProfileRepos(){
    return this.httpClient.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }

  updateProfile(username:string){
    this.username = username;
  }
}