import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { ProviderService } from 'src/app/provider.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userProfile: User[] = [];

  constructor(public providerService: ProviderService) { }

  getUser(searchUser: any) {
    this.providerService.getUser(searchUser).then(
      (success) => {
        this.userProfile = this.providerService.userProfile;
      },
      (error) => {
        return error;
      }
    )
  }

  ngOnInit(): void {
    this.getUser('freestyletear');
  }

}








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
