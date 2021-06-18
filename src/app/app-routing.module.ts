import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from '../app/employee/employee.component';
import { ViewEmployeeComponent } from '../app/view-employee/view-employee.component';

const routes: Routes = [
  {path:'', component:ViewEmployeeComponent},
  {path:'employee', component:EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
