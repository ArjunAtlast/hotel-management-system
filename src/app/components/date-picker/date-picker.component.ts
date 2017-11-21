import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {

  @Input('value') date_value: any = new Date();
  min_date:any = new Date();
  max_date:any = new Date(new Date().getFullYear() + 20, 12);

  start_day: number;
  ddates: number[];
  cdates: number[];
  days:string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  model_open: boolean = false;

  propogateChange = (_:any) => {};
  //propogateTouch = (_:any) => {};

  constructor() { }

  ngOnInit() {
    this.populateDates();
  }

  get value():any {
    return this.date_value;
  }

  set value(val: any) {
    this.date_value = val;
    this.propogateChange(this.value);
  }
  /**
    Control Value Accessor Methods
  */
  writeValue(val: any) {
    if(val!==undefined && val !== null) {
      this.value = val;
    }
    console.log(val);
    this.populateDates();
  }


  registerOnChange(fn) {
    this.propogateChange = fn;
  }

  registerOnTouched() {}

  /*
    Triggered when editing the year input
  */
  yearChange(event):void {
    let new_date = new Date(this.value.toString());
    new_date.setFullYear(event.target.value);
    if(new_date.getFullYear()<this.min_date.getFullYear()) new_date.setFullYear(this.min_date.getFullYear());
    if(new_date.getFullYear()>this.max_date.getFullYear()) new_date.setFullYear(this.max_date.getFullYear());
    event.target.value = new_date.getFullYear();
    this.value = new_date;
    this.populateDates();
  }

  /**
    Triggered on Clicking buttons
    Adds step to the value of year
  */
  changeYear(step: number) {
    let new_date = new Date(this.value.toString());
    let year = new_date.getFullYear();
    let min_year = new Date(this.min_date.toString()).getFullYear();
    let max_year = new Date(this.max_date.toString()).getFullYear();
    let n_year = Math.min(max_year, Math.max(min_year, year+step));
    new_date.setFullYear(n_year);
    this.value = new_date;

    this.populateDates();
  }

  /**
    Triggered on Clicking buttons
    Adds step to the value of month
  */
  changeMonth(step: number) {
    let new_date = new Date(this.value.toString());
    let month = new_date.getMonth();

    if(month+step < 0) {
      new_date.setFullYear(new_date.getFullYear() - 1);
    }
    else if(month+step > 11) {
      new_date.setFullYear(new_date.getFullYear() + 1);
    }

    new_date.setMonth((month+step+12)%12)

    if(new_date<this.min_date) new_date.setMonth(new Date(this.min_date.toString()).getMonth());
    this.value = new_date;

    this.populateDates();
  }

  /**
    populates the matrices ddates, cdates and the number start_date
    needed to make the calender.
  */
  populateDates() {
    let year = new Date(this.value.toString()).getFullYear();
    let month = new Date(this.value.toString()).getMonth();
    this.start_day = new Date(year, month, 1).getDay();
    if(month == new Date().getMonth() && year == new Date().getFullYear()) {
      this.ddates = this.range(1, new Date().getDate());
      this.cdates = this.range(new Date().getDate(), new Date(year, month+1, 0).getDate()+1);
    }
    else {
      this.ddates = [];
      this.cdates = this.range(1, new Date(year, month+1, 0).getDate()+1);
    }
  }

  /**
    Triggered on clicking a date from calender
  */
  selectDate(date: number) {
    let new_date = new Date(this.value.toString());
    new_date.setDate(date);
    this.value = new_date;
  }

  /**
    returns currently selected date
  */
  getSelectedDate(): number {
    return new Date(this.value.toString()).getDate();
  }

  /**
    open and close date selector model
  */
  openModel() {
    this.model_open = true;
  }

  closeModel() {
    this.model_open = false;
  }

  /**
    range function for usage
  */
  range(min:number, max:number): number[] {
    let arr = [];
    for(let i=min; i<max; i++){
      arr[i-min] = i;
    }
    return arr;
  }

}
