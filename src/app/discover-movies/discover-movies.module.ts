import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverMoviesComponent } from './discover-movies.component';

import { DiscoverMoviesRoutingModule } from './discover-movies-routing.module';
import { MovieCardComponent } from './movie-card/movie-card.component';


@NgModule({
  declarations: [
    MovieCardComponent,
    DiscoverMoviesComponent

  ],
  imports: [
    CommonModule,
    DiscoverMoviesRoutingModule
  ]
})
export class DiscoverMoviesModule { }
