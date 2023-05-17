import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-discover-movies',
  templateUrl: './discover-movies.component.html',
  styleUrls: ['./discover-movies.component.scss']
})
export class DiscoverMoviesComponent implements OnInit{

  movies?: any[]
  filteredMovie?: any[]

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getAllMovies()
  }

  getAllMovies(){
    this.movieService.getAllMovies().subscribe(res => {
      this.movies = res
      this.getNewMovies()
    })
  }

  getNewMovies = () => {
    this.filteredMovie = this.movies?.filter(movie => movie.relYear > 2022)
  }

  getGenreMovies(filterMoviesBy: string ,movieGenre: string){
    this.filteredMovie = this.movies?.filter(movie => movie[filterMoviesBy] === movieGenre)
  }

}
