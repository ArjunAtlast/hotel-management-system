import { Component, OnInit } from '@angular/core';
import { Food } from '../../api/food';

import { PlaceOrderService } from '../../services/place-order.service';

@Component({
  selector: 'app-place-order-page',
  templateUrl: './place-order-page.component.html',
  styleUrls: ['./place-order-page.component.scss'],
})
export class PlaceOrderPageComponent implements OnInit {

  foodTypes: any[] = [];

  constructor(private order: PlaceOrderService) { }

  ngOnInit() {
    this.getFoods();
  }

  getFoods() {
    this.order.findFoods().then((data) => {
      this.foodTypes = data;
    }).catch(error => {
      console.log(error);
    });
  }

  expandType(type: string): string {
    const FOOD_TYPES = {'BRK': 'Breakfast', 'LUN': 'Lunch', 'DIN': 'Dinner'};

    return FOOD_TYPES[type];
  }

}
