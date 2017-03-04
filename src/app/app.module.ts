import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { CustomerDetailComponent } from './customer-detail-component';
import { CustomersComponent} from './customers.component';
import { CustomerService} from './customer.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.components'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {

  path: "customers",
  component: CustomersComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },

{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},

{
  path: "yuchen",
redirectTo: '/dashboard',
pathMatch: 'full'}

])
  ],
  declarations: [
    AppComponent,
    CustomerDetailComponent, 
    CustomersComponent,
    DashboardComponent
  ],
  providers:[
    CustomerService
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }