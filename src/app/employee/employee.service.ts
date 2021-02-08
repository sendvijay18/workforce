import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://reqres.in/api/users';

  getEmployees(page): Observable<any> {
    return this.http.get(this.baseUrl +'?page='+page);
  }

  getEmployeeById(employeeId: number): Observable<any>{
    return this.http.get<Employee>(this.baseUrl + '/' + employeeId);
  }

  getEmployeeByPage(pageNumber: number): Observable<any>{
    return this.http.get<any>(this.baseUrl + '?' + pageNumber);
  }

  updateEmployee(employee : Employee): Observable<any>{
    return this.http.put(this.baseUrl + '/' + employee.id, employee);
  }
  
  deleteEmployee(id: number): Observable<any>{
    return this.http.delete(this.baseUrl + '/' + id);
  }

  createEmployee(employee : Employee): Observable<any>{ 
    return this.http.post(this.baseUrl, employee);
  }
}
