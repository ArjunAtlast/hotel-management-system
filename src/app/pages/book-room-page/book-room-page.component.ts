import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-room-page',
  templateUrl: './book-room-page.component.html',
  styleUrls: ['./book-room-page.component.scss'],
})
export class BookRoomPageComponent implements OnInit {

  checkInDate: any = new Date();

  constructor() {

  }

  ngOnInit() {

  }

}
