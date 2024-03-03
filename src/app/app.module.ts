import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Day2Component } from './day2/day2.component';
import { Day2bchildComponent } from './day2bchild/day2bchild.component';
import { FirstTrialComponent } from './first-trial/first-trial.component';
import { Day3Component } from './day3/day3.component';
import { DomInteractionComponent } from './dom-interaction/dom-interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTrialComponent,
    HomeComponent,
    Day2Component,
    Day2bchildComponent,
    Day3Component,
    DomInteractionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
