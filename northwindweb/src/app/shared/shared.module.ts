import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TableViewComponent } from './table-view/table-view.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [NavbarComponent, NotFoundComponent, TableViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxDatatableModule,
    MaterialModule
  ],
  exports: [NavbarComponent, NotFoundComponent, TableViewComponent]
})
export class SharedModule { }
