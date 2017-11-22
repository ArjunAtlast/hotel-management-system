import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceOrderService } from '../../services/place-order.service';
import { Food } from '../../api/food';

@Component({
  selector: 'app-complete-order',
  templateUrl: './complete-order.component.html',
  styleUrls: ['./complete-order.component.scss'],
})
export class CompleteOrderComponent implements OnInit {

  food: Food;
  guest_id: number;
  quantity: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private order: PlaceOrderService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getFood(+params['id']);
    });
  }

  getFood(id: number) {
    this.order.findFood(id).then(data => {
      this.food = data;
    }).catch(error => {
      console.log(error);
    });
  }

  expandType(type: string): string {
    const FOOD_TYPES = {'BRK': 'Breakfast', 'LUN': 'Lunch', 'DIN': 'Dinner'};
    return FOOD_TYPES[type];
  }

  completeOrder() {
    this.order.orderFood(this.guest_id, this.food.Food_item_id, this.quantity).then(() => {
      alert("Success");
    }).catch(error => {
      console.log(error);
    });
  }

}
