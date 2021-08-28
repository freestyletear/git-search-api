import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service'; /* I ADDED THIS */

@Component({
  selector: 'app-profile', /* THIS WAS gg-profile */
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!: any[];
  repos!: any[];
  username!: string;

  constructor(private profileService: ProfileService) { 
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile; /*I ADDED THIS FROM this.profileService */
    });

    this.profileService.getProfileRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	})  	
  }

    findProfile(){
  	  this.profileService.updateProfile(this.username);
    }

  // findProfile(){
  // 	this.profileService.updateProfile(this.username);
  	// this.profileService.getProfileInfo().subscribe(profile => {
  	// 	console.log(profile); 
  		// this.profile = profile; /* THIS WAS PRESENT HERE */
  	// });

  // 	this.profileService.getProfileRepos().subscribe(repos => {
  // 		console.log(repos);
  // 		this.repos = repos;
  // 	})  	
  // } /* ALL THIS WAS PRESENT HERE */

  ngOnInit() {
  }

}