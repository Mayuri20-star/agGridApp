import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

   public subject = new Subject<any>();
   public subject1 = new Subject<any>();
 
  addToCart(obj:string) {
    this.subject.next(obj);
  }

  // clearCart() {
  //   this.subject.next();
  // }
 
  // getCart(): Observable<any>{
  //   return this.subject.asObservable();
  // }

  addEmployees(iArr){
    this.subject1.next(iArr);
  }
  
}
