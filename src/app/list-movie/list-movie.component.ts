import { Component, OnInit } from '@angular/core';
import { MovieService } from '../api/api';
import { JsonpModule, Jsonp } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css'],
  providers:[
 	MovieService
 	]
})
export class ListMovieComponent implements OnInit {
  public selectedId: number;
  public list_movie: any = [];
  public page = 1;
  public query: string;

  constructor(
 		private movieService: MovieService,
    private jsonp: Jsonp,
    private router: Router,
    private route: ActivatedRoute) {
 	}

  getMovies(){
    this.movieService.getTopMovies().subscribe(data => {
      const res = (data as any)
      const ret = JSON.parse(res._body)
      this.list_movie = ret
    })
  }
  search(){
    if(this.query) {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=9c3d2c4419996bf281beb88bd141f2f3&language=pt-BR&page=1&include_adult=false&query=${encodeURIComponent(this.query)}&callback=JSONP_CALLBACK`;
      return this.jsonp.get(url).subscribe(data =>
        {
          this.list_movie = data.json();
        }
      );
    }
	}
  movieDetails(movie){
    this.router.navigate(['/movie', movie.id])
 	}
  ngOnInit() {
    this.getMovies();
  }

}
