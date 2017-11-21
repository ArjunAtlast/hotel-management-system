import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { OnInit, OnDestroy } from  '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private sub: any;
  constructor(private route: Router, private title: Title){}

  ngOnInit() {
    this.sub = this.route.events.subscribe((data) => {
      if(data instanceof RoutesRecognized ) {
        this.title.setTitle(data.state.root.firstChild.data.title);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
