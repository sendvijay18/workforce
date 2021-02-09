import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';

const baseUrl: string = 'https://reqres.in/api/users'; 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  

  getEmployees(page): Observable<any> {
    return this.http.get(`${baseUrl}` +'?page='+page);
  }

  getEmployeeById(employeeId: number): Observable<any>{
    return this.http.get<Employee>(`${baseUrl}` + '/' + employeeId);
  }

  getEmployeeByPage(pageNumber: number): Observable<any>{
    return this.http.get<any>(`${baseUrl}` + '?' + pageNumber);
  }

  updateEmployee(employee : Employee): Observable<any>{
    return this.http.put(`${baseUrl}/${employee.id}`, employee);
  }
  
  deleteEmployee(id: number): Observable<any>{
    return this.http.delete(`${baseUrl}` + '/' + id);
  }

  createEmployee(employee : Employee): Observable<any>{ 
    return this.http.post(`${baseUrl}` + '/', employee);
  }
}
