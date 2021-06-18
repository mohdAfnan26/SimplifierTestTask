import { Component, OnInit, ViewChild } from '@angular/core';
import {  NgForm, FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewEmployeeService } from './view-employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  lstdetail: any;
  ID: any;

  constructor(private formbulider: FormBuilder, private empDetails: ViewEmployeeService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    this.Getdetails();
  }
  Getdetails(){
    debugger;
    this.empDetails.ManageEmployee()
    .subscribe(
      data =>
      {
        debugger;
        this.lstdetail = data;
      }
    )
      
      }
      onDelete(ID: any)
      {
        debugger;
         for(var i in this.lstdetail)
         {
           if(ID == this.lstdetail[i].ID)
           {
             this.ID = this.lstdetail[i].ID;
           }
         }
         debugger;
        this.empDetails.DeleteEmployee(this.ID)
        .subscribe(
          data =>
          {
            debugger;
            this.Getdetails();
          }
        )
        } 
      confirmDialogueOkDetails(){
        // debugger;
        // this.empDetails.DeleteEmployee(this.ID)
        // .subscribe(
        //   data =>
        //   {
        //     debugger;
        //     this.Getdetails();
        //   }
        // )
      }
  }   
   
 


