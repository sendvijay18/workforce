import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';
import {Router} from "@angular/router";

@Component({
  selector: 'employees',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employeeList: any;
  public employees: any[] = [];
  public pages: any = [];
  public page: any;

  constructor(private employeeService: EmployeeService, private router: Router,) {
    this.page= 1;
   }

  ngOnInit(): void {
    this.getdataByPage(this.page);
  }

  editEmployee(employee: Employee): void {
    localStorage.removeItem("editEmployeeId");
    localStorage.setItem("editEmployeeId", employee.id.toString());
    this.router.navigate(['edit-employee']);
  };

  getdataByPage(page){
    this.pages = [];
    this.employeeService.getEmployees(page)
      .subscribe( pageData => {
        for(let i=0;i < pageData.total_pages; i++){
          this.pages.push(i+1);
        }
        this.employeeList = pageData;
    });
  }

}
