import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';


@Component({

    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',

})

export class DashboardComponent implements OnInit{

    customers: Customer[] = [];

    constructor(private customerService: CustomerService){

    }


    ngOnInit(): void {
        this.customerService.getCustomers()
        .then(customers => this.customers = customers.slice(1,5));

    }








}