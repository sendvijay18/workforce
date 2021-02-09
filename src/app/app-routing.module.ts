import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EditEmployeeComponent } from './employee/edit-employee.component';
import { AddEmployeeComponent } from './employee/add-employee.component';

const routes: Routes = [{ path: 'employee', component: EmployeeComponent },
{ path: 'edit-employee', component: EditEmployeeComponent },
{ path: 'add-employee', component: AddEmployeeComponent },
{ path: '**', redirectTo: '/employee', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
