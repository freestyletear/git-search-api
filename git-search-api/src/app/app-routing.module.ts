import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




// import { NotFoundComponent } from './components/not-found/not-found.component';
// import { UserComponent } from './components/user/user.component';
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { RepoComponent } from './components/repo/repo.component';

// const routes: Routes = [
//   { path: 'user', component:UserComponent },
//   { path: 'repo', component:RepoComponent },
//   { path: '', redirectTo:"/user", pathMatch:"full"},
//   { path: '**', component:NotFoundComponent },
 
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }