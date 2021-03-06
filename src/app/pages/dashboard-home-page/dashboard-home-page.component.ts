import { Component, OnInit } from '@angular/core';
import { Facility } from '../../api/facility';
import { Guest } from '../../api/guest';
import { FacilityServiceService } from '../../services/facility-service.service';
import { PlaceOrderService } from '../../services/place-order.service';
import { BookingService } from '../../services/booking.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-home-page',
  templateUrl: './dashboard-home-page.component.html',
  styleUrls: ['./dashboard-home-page.component.scss'],
})
export class DashboardHomePageComponent implements OnInit {

  orders: any[];
  guest_id: number;

  facilities: Facility[];

  guest: Guest;

  constructor(
    private facility: FacilityServiceService,
    private order: PlaceOrderService,
    private booking: BookingService,
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  getUserFacilities() {
    this.facility.getUserFacilities(this.guest.Guest_id).then((data: Facility[]) => {
      this.facilities = data;
    }).catch(error => {
      console.log(error);
    })
  }

  getUserOrders() {
    this.order.getUserOrders(this.guest.Guest_id).then((data:any[])=> {
      this.orders = data;
    }).catch(error => {
      console.log(error);
    })
  }

  getUserDetails() {
    this.booking.getUserDetails(this.guest_id).then((data) => {
      this.guest = data;
      this.getUserOrders();
      this.getUserFacilities();
    }).catch(error => {
      console.log(error);
    });
  }

  checkOutGuest() {
    this.booking.checkout(this.guest.Guest_id).then((data) => {
      this.session.setItem("bill", data[0]);
      this.session.setItem("guest", this.guest);
      this.router.navigate(['dashboard', 'bill-page']);
    }).catch(error => {
      alert("Failed");
      console.log(error);
    });
  }

}
