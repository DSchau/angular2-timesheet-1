import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Employee } from './Employee';
import { ExtHttp } from '../core/extHttp.service';

@Injectable()
export class EmployeeService {

  constructor(private http: ExtHttp) {}

  getEmployees(): Observable<Employee[]> {
    return Observable.create((observer) => {
      this.http.get('/users').subscribe((response) => {
        observer.next(response.json());
      });
    });
  }

  // add a new method to persist an employee using the endpoint included below
  //  /users
}
