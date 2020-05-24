import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerService } from './customer-list/customer.service';
import { MaterialModule } from '../material.module';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { NewCustomerService } from './new-customer/new-customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { EditCustomerService } from './edit-customer/edit-customer.service';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { DetailCustomerService } from './detail-customer/detail-customer.service';



@NgModule({
  declarations: [CustomerListComponent, NewCustomerComponent, EditCustomerComponent, DetailCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService, NewCustomerService, EditCustomerService, DetailCustomerService],
  entryComponents: [NewCustomerComponent, EditCustomerComponent, DetailCustomerComponent]
})
export class CustomerModule { }
