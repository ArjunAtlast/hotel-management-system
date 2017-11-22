import { Component, OnInit } from '@angular/core';
import { Booking } from '../../api/booking';

import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-book-room-page',
  templateUrl: './book-room-page.component.html',
  styleUrls: ['./book-room-page.component.scss'],
})
export class BookRoomPageComponent implements OnInit {

  booking: Booking;


  constructor(private book: BookingService) {

  }

  ngOnInit() {
    this.booking = new Booking();
    this.booking.check_in_date = new Date();
  }

  bookRoom() {
    console.log(this.booking.guest_phno);
    if(this.isValid) {

      this.book.bookRoom(this.booking).then((data) => {
        console.log(data);
      }).catch(error => {
        console.log(error);
      });
    }
  }

  get isValid(): boolean {
    return (!!this.booking.guest_name && !!this.booking.guest_address && !!this.booking.guest_phno);
  }

}
