import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { DashboardPageComponent } from '../pages/dashboard-page/dashboard-page.component';
import { DashboardHomePageComponent } from '../pages/dashboard-home-page/dashboard-home-page.component';
import { BookRoomPageComponent } from '../pages/book-room-page/book-room-page.component';
import { PlaceOrderPageComponent } from '../pages/place-order-page/place-order-page.component';
import { CompleteOrderComponent} from '../pages/complete-order/complete-order.component';
import { UseFacilityPageComponent } from '../pages/use-facility-page/use-facility-page.component';
import { BillPageComponent } from '../pages/bill-page/bill-page.component';

import { AuthGuard } from '../guards/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent, data: { title: 'Login' }},

  {
    path: 'dashboard',
    component: DashboardPageComponent,
    //canActivate: [AuthGuard],
    data: { title: 'Dashboard' },
    children: [
      { path: '', component: DashboardHomePageComponent, data: { title: 'Dashboard | Home' }},
      { path: 'book-room', component: BookRoomPageComponent, data: { title: 'Book Room'}},
      { path: 'place-order', component: PlaceOrderPageComponent, data: { title: 'Place Order'}},
      { path: 'complete-order/:id', component: CompleteOrderComponent, data: { title: 'Complete Order'}},
      { path: 'use-facility', component: UseFacilityPageComponent, data: { title: 'Use Facility'}},
      { path: 'bill-page', component: BillPageComponent, data: { title: 'Bill'}}
    ]
  },
  //{ path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } //debugging
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
