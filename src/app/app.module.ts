import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './header/profile/profile.component';
import { HomeComponent } from './header/home/home.component';
import { MyListComponent } from './header/my-list/my-list.component';
import { MoviesComponent } from './header/movies/movies.component';
import { TvshowsComponent } from './header/tvshows/tvshows.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MostWatchedComponent } from './most-watched/most-watched.component';
import { WatchingNowComponent } from './watching-now/watching-now.component';
import { ReccomendedComponent } from './reccomended/reccomended.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    HomeComponent,
    MyListComponent,
    MoviesComponent,
    TvshowsComponent,
    CarouselComponent,
    MostWatchedComponent,
    WatchingNowComponent,
    ReccomendedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
