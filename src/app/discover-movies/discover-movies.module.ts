import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverMoviesRoutingModule } from './discover-movies-routing.module';
import { NewMoviesComponent } from './new-movies/new-movies.component';
import { ComedyComponent } from './comedy/comedy.component';
import { ThrillerComponent } from './thriller/thriller.component';


@NgModule({
  declarations: [
    NewMoviesComponent,
    ComedyComponent,
    ThrillerComponent,
  ],
  imports: [
    CommonModule,
    DiscoverMoviesRoutingModule
  ]
})
export class DiscoverMoviesModule { }
