import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { ICustomer } from '../models/customer';
import { MatDialog } from '@angular/material/dialog';
import { NewCustomerComponent } from '../new-customer/new-customer.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { DetailCustomerComponent } from '../detail-customer/detail-customer.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = [];
  numberOfRecords = 0;
  pageSizeOptions: number[] = [10, 20, 30];
  pageSize = 10;
  pageIndex = 0;
  isVisible = false;
  constructor(
    private _customerService: CustomerService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getCustomer(1, 20);
  }

  getCustomer(page: number, rows: number): void {
    this._customerService.getCustomerList(page, rows).subscribe(customers => {
      this.customers = customers;
      this.numberOfRecords = customers[0]?.totalRecords;
    });
  }

  changePage(event: any): void {
    this.getCustomer(event.pageIndex + 1, event.pageSize);
  }

  newCustomer(): void {
    const dialogRef = this.dialog.open(NewCustomerComponent, {
      panelClass: 'new-customer-modal-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCustomer(1, 10);
    });
  }

  editCustomer(id: number): void {
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      panelClass: 'new-customer-modal-dialog',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCustomer(1, 10);
    });
  }
  viewDetails(id: number): void {
    const dialogRef = this.dialog.open(DetailCustomerComponent, {
      panelClass: 'new-customer-modal-dialog',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCustomer(1, 10);
    });
  }

}
