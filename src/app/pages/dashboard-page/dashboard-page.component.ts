import { Component, OnInit } from '@angular/core';
import { User } from '../../api/user';
import { AuthService } from '../../services/auth.service';

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
    { icon: 'spa', text: 'Use Facility', link: '/dashboard/use-facility'}
  ];

  c_user: User = {
    Staff_id: 1101,
    Name: 'John Doe',
    Username: 'johndoe123'
  };

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.c_user = this.auth.currentUser;
  }

}
