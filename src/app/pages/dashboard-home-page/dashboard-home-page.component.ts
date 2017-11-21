import { Component, OnInit } from '@angular/core';
import { Facility } from '../../api/facility';
import { Guest } from '../../api/guest';

@Component({
  selector: 'app-dashboard-home-page',
  templateUrl: './dashboard-home-page.component.html',
  styleUrls: ['./dashboard-home-page.component.scss'],
})
export class DashboardHomePageComponent implements OnInit {

  orders: any[] = [
    {
      Type: 'BRK',
      Name: 'Regular',
      Rate: 120,
      Quantity: 5
    },
    {
      Type: 'BRK',
      Name: 'Regular',
      Rate: 120,
      Quantity: 5
    }
  ];

  facilities: Facility[] = [
    {
      Facility_id: 1,
      Type: 'SPA',
      Rate: 200
    },
    {
      Facility_id: 1,
      Type: 'SPA',
      Rate: 200
    },
    {
      Facility_id: 1,
      Type: 'SPA',
      Rate: 200
    },
    {
      Facility_id: 1,
      Type: 'SPA',
      Rate: 200
    }
  ];

  guest: Guest = {
    Guest_id: 1,
    Guest_name: 'Arjun',
    Guest_address: 'Sandeep Sadan (h)\nKatampazhipuram (PO)\nPalakkad',
    Guest_phone_no: '9567881757'
  };

  constructor() { }

  ngOnInit() {
  }

}
