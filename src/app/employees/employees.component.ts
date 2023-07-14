import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  employees$!: Observable<any>;
  url = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.employees$ = 
    this.http.get(this.url);
    // .subscribe((data) => {
    //   this.employees = data;
    //   console.log(this.employees);
    // });
    // console.log(this.employees);
  }
}
