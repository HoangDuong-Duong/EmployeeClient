import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { empty, Observable } from "rxjs";
import { Employee } from "./employee";
import { environment } from "src/environments/environment";
  

  @Injectable({providedIn: 'root'})
  export class ServiceName {
    private apiBaseUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) {}

    public getAllEmployee(): Observable<Employee[]>{
      return this.http.get<Employee[]>(`${this.apiBaseUrl}/employee/all`)
    }

    public updateEmployee(employee : Employee) : Observable<Employee>{
      return this.http.put<Employee>(`${this.apiBaseUrl}/employee/update`,employee)
    }

    public addEmployee(employee : Employee) : Observable<Employee>{
      return this.http.post<Employee>(`${this.apiBaseUrl}/employee/add`,employee)
    }

    public deleteEmployee(id : number):Observable<void>{
      return this.http.delete<void>(`${this.apiBaseUrl}/employee/delete/${id}`)
    }

    public getEmployeeById(id: number):Observable<Employee>{
      return this.http.get<Employee>(`${this.apiBaseUrl}/employee/find/${id}`)
    }  
  }


