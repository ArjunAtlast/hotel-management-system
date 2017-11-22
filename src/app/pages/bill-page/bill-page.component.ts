import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss'],
})
export class BillPageComponent implements OnInit {

  bill: any;
  guest: any;
  constructor(private session: SessionService) { }

  ngOnInit() {
    this.bill = this.session.getItem('bill');
    console.log(this.bill);
    this.guest = this.session.getItem('guest');
  }

}
