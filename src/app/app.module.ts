import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './router/router.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { DashboardHomePageComponent } from './pages/dashboard-home-page/dashboard-home-page.component';
import { BookRoomPageComponent } from './pages/book-room-page/book-room-page.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { PlaceOrderPageComponent } from './pages/place-order-page/place-order-page.component';
import { FoodItemComponent } from './components/food-item/food-item.component';
import { CompleteOrderComponent } from './pages/complete-order/complete-order.component';
import { UseFacilityPageComponent } from './pages/use-facility-page/use-facility-page.component';
import { OrderComponent } from './components/order/order.component';

import { AuthService } from './services/auth.service';
import { BookingService } from './services/booking.service';
import { PlaceOrderService } from './services/place-order.service';
import { FacilityServiceService } from './services/facility-service.service';

import { AuthGuard } from './guards/auth.guard';
import { BillPageComponent } from './pages/bill-page/bill-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    SidebarComponent,
    DashboardHomePageComponent,
    BookRoomPageComponent,
    DatePickerComponent,
    PlaceOrderPageComponent,
    FoodItemComponent,
    CompleteOrderComponent,
    UseFacilityPageComponent,
    OrderComponent,
    BillPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    BookingService,
    FacilityServiceService,
    AuthGuard,
    PlaceOrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
