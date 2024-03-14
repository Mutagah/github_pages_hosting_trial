import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Day2Component } from '../day2/day2.component';
import { HomeComponent } from '../home/home.component';
import { FirstTrialComponent } from '../first-trial/first-trial.component';
import { Day3Component } from '../day3/day3.component';
import { Day4Component } from '../day4/day4.component';
import { PipesComponent } from '../pipes/pipes.component';

// Routes an array in which we pass javascript objects
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '1', redirectTo: 'day1', pathMatch: 'full' },
  { path: 'day1', component: FirstTrialComponent },
  { path: '2', redirectTo: 'day2', pathMatch: 'full' },
  {
    path: 'day2',
    component: Day2Component,
  },
  { path: '3', redirectTo: 'day3', pathMatch: 'full' },
  {
    path: 'day3',
    component: Day3Component,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'day4',
    component: Day4Component,
  },
  // Handling non existing routes
  {
    path: '**',
    redirectTo: '',
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
