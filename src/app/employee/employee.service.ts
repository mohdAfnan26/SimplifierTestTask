import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from '../Models/Employee.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient : HttpClient) { }

  AddEmployee( AddDetail : Employee ): Observable<any>
  {
    debugger;
    return this.httpClient.post<Employee[]>("http://localhost:59799/api/Registration/EmpRegestration",AddDetail /*,StudID*/);
  }

  EditEmployee(ID:any): Observable<any>
  {
    debugger;
    return this.httpClient.get("http://localhost:59799/api/Registration/EditEmployee?ID=" +ID);
  }
  
  UpdateEmployee(ID:any, AddDetail:object ): Observable<any>
  {
    debugger;
    return this.httpClient.post("http://localhost:59799/api/Registration/UpdateEmployee?ID=" +ID, AddDetail);

  }
}
