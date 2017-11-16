import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ChartComponent} from './chart/chart.component';
import {ChartModule, HIGHCHARTS_MODULES} from "angular-highcharts";
import exporting from 'highcharts/modules/exporting.src.js';
import drilldown from 'highcharts/modules/drilldown.src.js';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from "./app-routing.module";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";

export function highchartsModules() {
  return [exporting, drilldown];
}

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    AppRoutingModule,

  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: HIGHCHARTS_MODULES, useFactory: highchartsModules},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
