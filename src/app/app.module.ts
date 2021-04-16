import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SingleComponent } from './views/single/single.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleComponent,
    PageNotFoundComponent,
    MovieDetailComponent
  ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
