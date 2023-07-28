import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  employees$!: Observable<any>;
  employees!:any[];
  url = 'http://localhost:3000/employees';
  constructor(private http: HttpClient, private employeeService:ApiService) {}

  ngOnInit(): void {
    this.employees$ = 
    this.http.get(this.url);
    this.employeeService.getEmployees().subscribe((data)=>{
      this.employees=data;
    },(error)=>{
      console.log(error);      
    }
    );
    // .subscribe((data) => {
    //   this.employees = data;
    //   console.log(this.employees);
    // });
    // console.log(this.employees);
  }
}
