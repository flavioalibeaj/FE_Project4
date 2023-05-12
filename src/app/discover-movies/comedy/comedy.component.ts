import { Component } from '@angular/core';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.scss']
})
export class ComedyComponent {

  movies: {imageUrl: string, title: string}[] = [
    {imageUrl: "https://img.dopebox.to/xxrz/250x400/243/74/04/740492c01a2b8a4f0eeaf03d70d73a1e/740492c01a2b8a4f0eeaf03d70d73a1e.jpg", title:"Beautiful Disaster"},
    {imageUrl: "https://img.dopebox.to/xxrz/250x400/243/d2/ee/d2ee59eb2672c98913ce69be9cc03514/d2ee59eb2672c98913ce69be9cc03514.jpg", title:"BEEF"},
    {imageUrl: "https://img.dopebox.to/xxrz/250x400/243/91/55/91559e2f52887f0dd84e0ec6164377fd/91559e2f52887f0dd84e0ec6164377fd.jpg", title:`Maggie Simpson in “Rogue Not Quite One”`},
    {imageUrl: "https://img.dopebox.to/xxrz/250x400/243/b4/06/b406ff7cd109903b2b9c9a73254ca68b/b406ff7cd109903b2b9c9a73254ca68b.jpg", title:"Pretty Stoned"},
  ]
}
