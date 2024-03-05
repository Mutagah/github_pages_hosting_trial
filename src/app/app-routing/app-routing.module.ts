import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Day2Component } from '../day2/day2.component';
import { HomeComponent } from '../home/home.component';
import { FirstTrialComponent } from '../first-trial/first-trial.component';
import { Day3Component } from '../day3/day3.component';
import { Day4Component } from '../day4/day4.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'day1', component: FirstTrialComponent },
  {
    path: 'day2',
    component: Day2Component,
  },
  {
    path: 'day3',
    component: Day3Component,
  },
  {
    path: 'day4',
    component: Day4Component,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
