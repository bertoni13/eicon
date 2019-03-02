import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { MovieComponent } from './movie/movie.component';
const appRoutes: Routes = [
  { path: '',  component: ListMovieComponent },
  { path: 'movie/:id', component: MovieComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [ListMovieComponent, MovieComponent]
