import { Component, Input } from '@angular/core';
import { Customer } from './customer';
@Component({
  selector: 'my-customer-detail',
  template: `
    <div *ngIf="customer">
      <h2>{{customer.name}} details:</h2>
      <div><label>id: </label>{{customer.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="customer.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class CustomerDetailComponent {
  @Input()
  customer: Customer;
}