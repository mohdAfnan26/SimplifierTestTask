import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewEmployeeService {

  constructor(private httpClient : HttpClient) { }

  ManageEmployee() : Observable<any>
  {
    debugger;
    return this.httpClient.get("http://localhost:59799/api/Registration/ManageEmployee");
  }

  DeleteEmployee(ID: string) : Observable<any>
  {
    debugger;
    return this.httpClient.delete("http://localhost:59799/api/Registration/DeleteEmployee?ID=" +ID);
  } 
}
