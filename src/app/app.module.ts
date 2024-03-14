import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// Import HttpClientModule when you want to use HttpClient
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Day2Component } from './day2/day2.component';
import { Day2bchildComponent } from './day2bchild/day2bchild.component';
import { FirstTrialComponent } from './first-trial/first-trial.component';
import { Day3Component } from './day3/day3.component';
import { DomInteractionComponent } from './dom-interaction/dom-interaction.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { LifecycleHooksChildComponent } from './lifecycle-hooks-child/lifecycle-hooks-child.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { Day4Component } from './day4/day4.component';
import { RestfulApiConsumptionComponent } from './restful-api-consumption/restful-api-consumption.component';
import { PipesComponent } from './pipes/pipes.component';
import { InitialsPipe } from './initials.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstTrialComponent,
    HomeComponent,
    Day2Component,
    Day2bchildComponent,
    Day3Component,
    DomInteractionComponent,
    LifecycleHooksComponent,
    LifecycleHooksChildComponent,
    FormsComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    Day4Component,
    RestfulApiConsumptionComponent,
    PipesComponent,
    InitialsPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
