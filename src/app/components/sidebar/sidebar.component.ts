import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../api/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  @Input() navItems: any[];

  @Input() user: User;

  constructor() { }

  ngOnInit() {
    console.log(this.navItems);
  }

}
