import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MovieService } from './api/api';
import { JsonpModule, Jsonp } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MovieComponent } from './movie/movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ListMovieComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [
    MovieService,
    JsonpModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
