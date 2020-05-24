import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrderContainerComponent } from './order-container/order-container.component';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/role.enum';

const orderRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: OrderContainerComponent
      }
    ],
    canActivate: [AuthGuard],
    data: { expectedRole: Role.AdminSupplier }

  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(orderRoutes)
  ],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
