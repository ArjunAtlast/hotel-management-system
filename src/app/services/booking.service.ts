import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../api/booking';
import { Guest } from '../api/guest';
import { HOST } from '../settings';

@Injectable()
export class BookingService {

  constructor(private http: HttpClient) { }

  bookRoom(booking: Booking): Promise<string> {
    let formData = new FormData();
    formData.append("guest_name", booking.guest_name);
    formData.append("guest_address", booking.guest_address);
    formData.append("guest_phno", booking.guest_phno);
    let check_in_date = booking.check_in_date.toISOString().split('T')[0];
    formData.append("check_in_date", check_in_date);

    return new Promise((resolve, reject) => {
      this.http.post(`${HOST}/book_room.php`, formData).subscribe((data: any) => {
        if(data.notfound) {
          reject(new Error("Booking Failed." + data.notfound));
        }
        else {
          resolve(data);
        }
      }, error => {
        reject(error);
      });
    });
  }

  checkout(guest_id: number): Promise<any> {
    let formData = new FormData();
    formData.append("guest_id", guest_id.toString());
    formData.append("check_out_date", new Date().toISOString().split("T")[0]);
    return new Promise((resolve, reject) => {
      this.http.post(`${HOST}/check_out.php`, formData).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    })
  }

  getUserDetails(guest_id:number): Promise<Guest> {
    let formData = new FormData();
    formData.append("guest_id", guest_id.toString());
    return new Promise((resolve, reject) => {
      this.http.post(`${HOST}/get_user_details.php`, formData).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }


}
