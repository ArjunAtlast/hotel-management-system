import { Component, Input } from '@angular/core';
import { Order } from '../../api/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {

  @Input("value") order: any;

  constructor() { }

  expandType(type: string): string {
    const FOOD_TYPES = {'BRK': 'Breakfast', 'LUN': 'Lunch', 'DIN': 'Dinner'};

    return FOOD_TYPES[type];
  }

}
