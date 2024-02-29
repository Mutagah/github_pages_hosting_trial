import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Day2Component } from './day2/day2.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, Day2Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}