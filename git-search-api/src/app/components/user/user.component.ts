import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { ResponseDataService } from '../services/response-data.service';

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { ProviderService } from 'src/app/provider.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class HomepageComponent implements OnInit {
  userDetails: User;
  userRepositories;
  constructor(private responseUserDataService: ResponseDataService) {}

  ngOnInit(): void {
    this.getUserDetails('freestyletear);
    this.getUserRepositories('freestyletear');
  }

  // user details
  getUserDetails(githubUsername) {
    this.responseUserDataService.getUserRequest(githubUsername).then(
      (response) => {
        this.userDetails = this.responseUserDataService.userGottenDetails;
      },
      (error) => {
        console.log(error);
      }
    ); // end of getUserRequest
  }

  // userRepositories
  getUserRepositories(githubUsername) {
    this.responseUserDataService.getUserRepositoryRequest(githubUsername).then(
      (response) => {
        this.userRepositories = this.responseUserDataService.userRepositories;
        console.log(this.userRepositories);
      },
      (error) => {
        console.log(error);
      }
    ); // end of getUserRepositoryRequest
  }
}






// import { Component, OnInit } from '@angular/core';
// import { User } from 'src/app/user';
// import { ProviderService } from 'src/app/provider.service';

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent implements OnInit {
//   userProfile: User[] = [];

//   constructor(public providerService: ProviderService) { }

//   getUser(searchUser: any) {
//     this.providerService.getUser(searchUser).then(
//       (success) => {
//         this.userProfile = this.providerService.userProfile;
//       },
//       (error) => {
//         return error;
//       }
//     )
//   }

//   ngOnInit(): void {
//     this.getUser('freestyletear');
//   }

// }








// import { Component, OnInit } from '@angular/core';
// import { User } from 'src/app/user';
// import { ProviderService } from 'src/app/provider.service';
// import { Repos } from 'src/app/repos';
// import { RepoService } from 'src/app/repo.service';

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent implements OnInit {
//   userProfile: User[] = [];
//   myRepo: Repos[] = [];

//   constructor(public providerService: ProviderService) { }

//   getUser(searchUser: any) {
//     this.providerService.getUser(searchUser).then(
//       (success) => {
//         this.userProfile = this.providerService.userProfile;
//       },
//       (error) => {
//         return error;
//       }
//     );
//     this.providerService.getRepo(searchUser).subscribe(
//     (success: Repos)=>{
//       this.myRepo=success
//       return(this.myRepo)
//         // console.log(this.myRepo)
    
//       }
     
//   )
//   }

//   ngOnInit(): void {
//     this.getUser('freestyletear');
//   }

// }
