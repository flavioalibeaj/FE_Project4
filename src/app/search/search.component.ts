import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  input: string | undefined

  showInput(input: string){
    this.input = input
    console.log(this.input)
  }

}
