import { Component, OnInit, ViewChild } from '@angular/core';
import {  NgForm, FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../Models/Employee.model'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @ViewChild(FormGroupDirective)formGroupDirective!: FormGroupDirective;
  AddemployeeForm!: FormGroup;
  submitted=false;
  ID: any;
  lstdetail: any;
  firstName: any;
  lastName: any;
  contactNumber: any;
  employeeId: any;
  emailId: any;


  constructor(private formbulider: FormBuilder, private employeeService: EmployeeService, private _router:Router, private router : ActivatedRoute) { }

  ngOnInit(): void {    
    debugger;
    this.ID = (this.router.snapshot.queryParamMap.get('ID'));
    this.BindingData();    
    this.AddemployeeForm = this.formbulider.group({
      FirstName : ['', [Validators.required]],
      LastName : ['', []], 
      ContactNumber : ['', [Validators.required]], 
      EmailId : ['', [Validators.required,Validators.email]], 
      EmployeeId : ['', []], 
     

    })
  }

  Customer(employee: Employee)   
  {
    debugger;
    if(this.ID==undefined)
    {
    if(employee.FirstName != "" && employee.ContactNumber != null && employee.EmailId != "")
    {
      if(employee.FirstName != null && employee.EmailId != null )
        {
          this.employeeService.AddEmployee(employee)
          .subscribe(() =>
           { 
              debugger; 
              this.formGroupDirective.resetForm();   
              this.AddemployeeForm.reset();
            })
        } 
    }
  }
  else
  {
    if(employee.FirstName != "" && employee.ContactNumber != null && employee.EmailId != ""  )
    {
      if(employee.FirstName != null && employee.EmailId != null )
        {
          this.employeeService.UpdateEmployee(this.ID,employee)
          .subscribe(() =>
           { 
              debugger; 
              this.formGroupDirective.resetForm();   
              this.AddemployeeForm.reset();
            })
        } 
    }
  }
}
  onreset()
  {
    debugger;
    this.submitted=false;
    this.AddemployeeForm.reset();
  }


BindingData(){
    debugger;
    this.employeeService.EditEmployee(this.ID)
    .subscribe(
      data =>{
        this.lstdetail = data;
        for(var i in this.lstdetail)
        {
          if(this.ID==this.lstdetail[i].ID)
          {
            this.firstName = this.lstdetail[i].FirstName;
            this.lastName = this.lstdetail[i].LastName;
            this.contactNumber = this.lstdetail[i].ContactNumber;
            this.emailId = this.lstdetail[i].EmailId;
            this.employeeId = this.lstdetail[i].EmployeeId;
            
          }
        }
      }
    )
  }

}