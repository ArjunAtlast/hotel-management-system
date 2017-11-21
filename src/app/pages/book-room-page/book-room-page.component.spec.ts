import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRoomPageComponent } from './book-room-page.component';

describe('BookRoomPageComponent', () => {
  let component: BookRoomPageComponent;
  let fixture: ComponentFixture<BookRoomPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRoomPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRoomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
