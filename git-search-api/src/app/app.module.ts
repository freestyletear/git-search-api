
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' /* I ADDED THIS */
/* ON TOP HERE WAS import { HttpModule } from '@angular/http'; */

import { FormsModule } from '@angular/forms';

import { ProfileService } from './services/profile.service';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    /*THIS WAS JUST HERE HttpModule,*/
    FormsModule,
    HttpClientModule /* I ADDED THIS */

  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }