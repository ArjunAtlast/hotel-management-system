import { Component, Input } from '@angular/core';
import { Food } from '../../api/food';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss'],
})
export class FoodItemComponent {

  @Input("value") food: Food;

  constructor(private router: Router) { }

  goto(id: number) {
    this.router.navigate(["dashboard","complete-order",id]);
  }

}
