import { Component, OnInit } from '@angular/core';
import { Facility } from '../../api/facility';

@Component({
  selector: 'app-use-facility-page',
  templateUrl: './use-facility-page.component.html',
  styleUrls: ['./use-facility-page.component.scss'],
})
export class UseFacilityPageComponent implements OnInit {

  facilities: Facility[] = [
    {
      Facility_id: 1,
      Type: 'Pool',
      Rate: 150,
      icon: 'pool'
    },
    {
      Facility_id: 2,
      Type: 'Gym',
      Rate: 200,
      icon: 'fitness_center'
    },
    {
      Facility_id: 3,
      Type: 'Spa',
      Rate: 300,
      icon: 'spa'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
