import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private employeeService: EmployeeService) { }
  addForm: FormGroup;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: ['', Validators.required],
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      avatar: ['', Validators.required],
      last_name: ['', Validators.required]
    });
  }

  onSubmit() {
    this.employeeService.createEmployee(this.addForm.value)
      .subscribe( data => {
        let val:any = Object.assign({}, data);
        console.log(val);
        this.router.navigate(['employee']);
      },
      error => {
        alert(error);
      });
  }

}
