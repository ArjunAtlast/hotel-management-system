import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST } from '../settings';
import { Food } from '../api/food';

@Injectable()
export class PlaceOrderService {

  constructor(private http: HttpClient) { }

  findFoods(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get(`${HOST}/get_foods.php`).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  findFood(id: number): Promise<Food> {
    let formData = new FormData();
    formData.append("id",id.toString());
    return new Promise((resolve, reject) => {
      this.http.post(`${HOST}/get_food.php`, formData).subscribe((data: Food) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  orderFood(guest_id: number, food_id: number, quantity: number): Promise<any> {
    let formData = new FormData();
    formData.append("guest_id", guest_id.toString());
    formData.append("food_id", food_id.toString());
    formData.append("quantity", quantity.toString());
    formData.append("timestamp", new Date().toISOString().replace('T',' ').replace(/\.[0-9]{3}Z/,''));

    return new Promise((resolve, reject) => {
      this.http.post(`${HOST}/order_food.php`, formData).subscribe(() => {
          resolve();
      }, error => {
        reject(error);
      });
    });
  }

  getUserOrders(guest_id: number): Promise<any[]> {
    let formData = new FormData();
    formData.append("guest_id", guest_id.toString());
    return new Promise((resolve, reject) => {
      this.http.post(`${HOST}/get_user_orders.php`, formData).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      })
    })
  }

}
