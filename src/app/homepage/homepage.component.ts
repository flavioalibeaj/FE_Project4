import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  images = [
    'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg'
  ];

  currentSlide = 0;
  movies = [];

  watchingNow = [
    {
      title: "The Shawshank Redemption",
      image: "https://picsum.photos/id/237/200/300"
    },
    {
      title: "The Godfather",
      image: "https://picsum.photos/id/238/200/300"
    },
    {
      title: "The Godfather: Part II",
      image: "https://picsum.photos/id/239/200/300"
    },
    {
      title: "The Dark Knight",
      image: "https://picsum.photos/id/240/200/300"
    },
    {
      title: "12 Angry Men",
      image: "https://picsum.photos/id/241/200/300"
    },
    {
      title: "Schindler's List",
      image: "https://picsum.photos/id/242/200/300"
    }
  ];

  // getRandomMovies() {
  //   let movies = [];
  //   while (movies.length < 4) {
  //     let random = Math.floor(Math.random() * this.watchingNow.length);
  //     if (!movies.includes(this.watchingNow[random])) {
  //       movies.push(this.watchingNow[random]);
  //     }
  //   }
  //   return movies;
  // }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
  }
}
