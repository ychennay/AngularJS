import {Injectable} from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS } from './mock-customers';

@Injectable()
export class CustomerService{

    getCustomers(): Promise<Customer[]> {

        return Promise.resolve(CUSTOMERS);
    }

    getCustomersSlowly(): Promise<Customer[]>{
        return new Promise(resolve => {

            setTimeout(() => resolve(this.getCustomers), 2000);
        });
    }

}
