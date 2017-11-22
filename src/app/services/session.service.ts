import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  private session: any = {};

  constructor() { }

  getItem(key: string) {
    return this.session[key];
  }

  setItem(key: string, val: any){
    this.session[key] = val;
  }

}
