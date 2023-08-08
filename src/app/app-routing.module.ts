import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EmployeesComponent } from './employees/employees.component';
import { ChartWidgetComponent } from './widget/chart-widget/chart-widget.component';
import { SummaryWidgetComponent } from './widget/summary-widget/summary-widget.component';
import { TableWidgetComponent } from './widget/table-widget/table-widget.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'employees', component:EmployeesComponent},
  {path:'chart', component:ChartWidgetComponent},
  {path:'summary', component:SummaryWidgetComponent},
  {path:'table-data', component:TableWidgetComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
