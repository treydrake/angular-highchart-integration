import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ChartComponent} from "./chart/chart.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'chart', component: ChartComponent},
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
