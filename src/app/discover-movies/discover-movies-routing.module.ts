import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverMoviesComponent } from './discover-movies.component';
import { NewMoviesComponent } from './new-movies/new-movies.component';
import { ComedyComponent } from './comedy/comedy.component';
import { ThrillerComponent } from './thriller/thriller.component';

const routes: Routes = [
  {
    path: "",
    component: DiscoverMoviesComponent,
    children: [
      {path: "", redirectTo: "new", pathMatch: "full"},
      {path: "new", component: NewMoviesComponent},
      {path: "comedy", component: ComedyComponent},
      {path: "thriller", component: ThrillerComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoverMoviesRoutingModule { }
