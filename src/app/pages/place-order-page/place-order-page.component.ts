import { Component, OnInit } from '@angular/core';
import { Food } from '../../api/food';

@Component({
  selector: 'app-place-order-page',
  templateUrl: './place-order-page.component.html',
  styleUrls: ['./place-order-page.component.scss'],
})
export class PlaceOrderPageComponent implements OnInit {

  foods: Food[] = [
    {
      Food_item_id: 1,
      Name: 'Regular',
      Rate: 120,
      Type: 'BRK'
    },
    {
      Food_item_id: 2,
      Name: 'Medium',
      Rate: 240,
      Type: 'BRK'
    },
    {
      Food_item_id: 3,
      Name: 'Large',
      Rate: 350,
      Type: 'BRK'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
