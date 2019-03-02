import { Component, OnInit } from '@angular/core';
import { MovieService } from '../api/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movieId: any;
  public movieDetails
  constructor(private route: ActivatedRoute,
              private movieService: MovieService) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.params['id'];
    this.movieService.getMoviesDetails(this.movieId).subscribe(data => {
      let res = (data as any)._body;
  		this.movieDetails = JSON.parse(res);
    })
  }

}
