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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
