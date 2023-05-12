import { Component } from '@angular/core';

@Component({
  selector: 'app-new-movies',
  templateUrl: './new-movies.component.html',
  styleUrls: ['./new-movies.component.scss']
})
export class NewMoviesComponent {

  movies: {imageUrl: string, title: string}[] = [
    {imageUrl: "https://img.dopebox.to/xxrz/250x400/243/16/1d/161d785cbe76ed2258c35adcff6cbf2a/161d785cbe76ed2258c35adcff6cbf2a.jpg", title:"Class of '09"},
    {imageUrl: "https://img.dopebox.se/xxrz/250x400/579/25/c8/25c8ec1264a13db4c67bced3ef34d55a/25c8ec1264a13db4c67bced3ef34d55a.jpg", title:"Dear Mama: The Saga of Afeni and Tupac Shakur"},
    {imageUrl: "https://img.dopebox.se/xxrz/250x400/579/ab/7d/ab7d9548f381221636dabe4b1812b26d/ab7d9548f381221636dabe4b1812b26d.jpg", title:"The Architect"},
    {imageUrl: "https://img.dopebox.se/xxrz/250x400/579/6d/f4/6df4b3c74eee9ece586d43befbbbaf0c/6df4b3c74eee9ece586d43befbbbaf0c.jpg", title:"The Tailor"},
    // {imageUrl: "https://img.dopebox.se/xxrz/250x400/579/5f/88/5f88a0877d225475e846a1971ec37c5a/5f88a0877d225475e846a1971ec37c5a.jpg", title:"The Artifice Girl"},
    // {imageUrl: "https://img.dopebox.se/xxrz/250x400/579/30/e1/30e1b2312ab2ea6fc0998366f1407bd5/30e1b2312ab2ea6fc0998366f1407bd5.jpg", title:"The Matchmaker"},
  ]
}
