import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {JsonpModule, Jsonp} from '@angular/http';
@Injectable()
export class MovieService {

	private url = 'https://api.themoviedb.org/3';
  private translate = '&language=pt-BR';
  private region = '&region=US';
  constructor(public http: Http, private jsonp: Jsonp) {}

  getTopMovies(){
    return this.http.get(
			this.url + `/movie/top_rated?&api_key=9c3d2c4419996bf281beb88bd141f2f3` + this.translate
		);
  }
  getMoviesDetails(filmeId){
    return this.http.get(
			this.url + `/movie/${filmeId}?api_key=9c3d2c4419996bf281beb88bd141f2f3` + this.translate
		);
  }
}
