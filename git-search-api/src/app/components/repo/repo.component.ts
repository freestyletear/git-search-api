import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { ProviderService } from 'src/app/provider.service';
import { RepoService } from 'src/app/repo.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  userProfile: User[] = [];
  repo: any;

  constructor(public providerService: ProviderService, private repoService: RepoService) { }

  getUser(searchUser: any) {
    this.getUserRepository(searchUser)
    this.providerService.getUser(searchUser).then(
      (success) => {
        this.userProfile = this.providerService.userProfile;
      },
      (error) => {
        return error;
      }
    )
  }

  getUserRepository(searchUser: any) {
    this.repoService.getRepo(searchUser).then(
      (success) => {
        this.repo = this.repoService.repo;
            console.log(this.repo)
      },
      (error) => {
        return error;
      }
    )
  }

  ngOnInit(): void {
    this.getUser('freestyletear');
    this.getUserRepository('freestyletear')
  }

}