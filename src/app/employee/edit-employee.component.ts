import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Employee } from './employee.model';

@Component({
  selector: 'edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  editForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    let employee = localStorage.getItem("editEmployeeId");
    if(!employee) {
      alert("Invalid action.")
      this.router.navigate(['employees']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: ['', Validators.required],
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      avatar: ['', Validators.required],
      last_name: ['', Validators.required]
    });
    this.employeeService.getEmployeeById(+employee)
      .subscribe( data => {
        this.editForm.setValue(data);
    });
  }

  editEmployeeSubmit() {
    this.employeeService.updateEmployee(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['employees']);
        },
        error => {
          alert(error);
        });
  }

  deleteEmployee() {
    // this.employeeService.deleteEmployee(this.editForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate(['employees']);
    //     },
    //     error => {
    //       alert(error);
    //     });
  }

}
