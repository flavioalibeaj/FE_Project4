import { Component } from '@angular/core';

@Component({
  selector: 'app-thriller',
  templateUrl: './thriller.component.html',
  styleUrls: ['./thriller.component.scss']
})
export class ThrillerComponent {

  movies: {imageUrl: string, title: string}[] = [
    {imageUrl: "https://img.dopebox.to/xxrz/250x400/243/22/c7/22c7016680da2c94a331fd785f7b0b37/22c7016680da2c94a331fd785f7b0b37.jpg", title:"I'll Be Watching"},
    {imageUrl: "https://img.dopebox.to/xxrz/250x400/243/ce/49/ce491560b4f3bbfc91a7b9889549e5e1/ce491560b4f3bbfc91a7b9889549e5e1.jpg", title:"A Nurse to Die For"},
    {imageUrl: "https://img.dopebox.to/xxrz/250x400/243/01/5b/015bc9dcac30cae2ddf9e63babe2755b/015bc9dcac30cae2ddf9e63babe2755b.jpg", title:`You Can't Escape Me`},
    {imageUrl: "https://img.dopebox.to/xxrz/250x400/243/48/bb/48bb2db8dbb46b02d1fe74d9a1f72ae8/48bb2db8dbb46b02d1fe74d9a1f72ae8.jpg", title:"Sound of Silence"},
  ]

}
