import { Component, OnInit } from '@angular/core';
import { User } from '../../api/user';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  navItems: any[] = [
    { icon: 'dashboard', text: 'Dashboard', link: '/dashboard' },
    { icon: 'hotel', text: 'Book Room', link: '/dashboard/book-room' },
    { icon: 'restaurant', text: 'Place Order', link: '/dashboard/place-order' },
    { icon: 'local_bar', text: 'Use Facility', link: '#'}
  ];

  c_user: User = {
    Staff_id: 1101,
    First_name: 'John',
    Last_name: 'Doe',
    Username: 'johndoe123'
  };

  constructor() { }

  ngOnInit() {
  }

}
