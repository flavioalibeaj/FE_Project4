import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverMoviesComponent } from './discover-movies.component';

const routes: Routes = [
  {path: "", component: DiscoverMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoverMoviesRoutingModule { }
