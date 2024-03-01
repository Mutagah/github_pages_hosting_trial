import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Day2Component } from '../day2/day2.component';
import { HomeComponent } from '../home/home.component';
import { FirstTrialComponent } from '../first-trial/first-trial.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'day1', component: FirstTrialComponent },
  {
    path: 'day2',
    component: Day2Component,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
