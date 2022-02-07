import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { ServiceName } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public employees : Employee[];
  constructor (private serviceName : ServiceName){}
  ngOnInit(): void {
    this.getAllEmployee();
  }

  public getAllEmployee ():void{
    this.serviceName.getAllEmployee().subscribe(
      (response:Employee[]) =>{
        this.employees = response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
}
