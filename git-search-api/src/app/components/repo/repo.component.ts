// // import { Component, OnInit } from '@angular/core';
// // import { User } from 'src/app/user';
// // import { ProviderService } from 'src/app/provider.service';
// // import { RepoService } from 'src/app/repo.service';

// import { Repos } from 'src/app/repos';
// import { RepoService } from 'src/app/repo.service';
// import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'app-user',
// //   templateUrl: './user.component.html',
// //   styleUrls: ['./user.component.css']
// // })
// // export class UserComponent implements OnInit {

// @Component({
//   selector: 'app-repo',
//   templateUrl: './repo.component.html',
//   styleUrls: ['./repo.component.css']
// })
// export class RepoComponent implements OnInit {
// //   userProfile: User[] = [];
//     //  repo: Repos; /* I ADDED THIS.................................................................*/
//     //  repo: Repos[]=[]
//   repo: any;

//   constructor(private repoService: RepoService) { }

//   getUserRepository(searchUser: any) {
//     this.repoService.getRepo(searchUser).then(
//       (success) => {
//         this.repo = this.repoService.repo;
//             console.log(this.repo)
//       },
//       (error) => {
//         return error;
//       }
//     )
//   }

//   ngOnInit(): void {
//     this.getUserRepository('freestyletear')
//   }

// }

// import { Repos } from 'src/app/repos';
// import { RepoService } from 'src/app/repo.service';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-repo',
//   templateUrl: './repo.component.html',
//   styleUrls: ['./repo.component.css']
// })
// export class RepoComponent implements OnInit {


//   myRepo: Repos[] = [];
//   constructor(public serviceRepo:RepoService) { }
//   getRepo(searchTerm:any){
//   this.serviceRepo.getRepo(searchTerm).subscribe(data =>{
//     this.myRepo=data;
//     return(this.myRepo);
//   });
// }
//   ngOnInit() {

//     this.getRepo('freestyletear');
//   }

// }