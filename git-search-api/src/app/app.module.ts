import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { RepoComponent } from './components/repo/repo.component';
import { UserComponent } from './components/user/user.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
// import { HighlightDirective } from './highlight.directive';
// import { DateAgoPipe } from './pipes/date-ago.pipe';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    // RepoComponent,
    UserComponent,
    SearchComponent,
    FooterComponent,
    AboutComponent,
    // HighlightDirective,
    // DateAgoPipe,
    NavComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }