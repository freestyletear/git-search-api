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
  repo: any;

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
