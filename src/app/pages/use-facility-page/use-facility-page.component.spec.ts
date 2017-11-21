import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseFacilityPageComponent } from './use-facility-page.component';

describe('UseFacilityPageComponent', () => {
  let component: UseFacilityPageComponent;
  let fixture: ComponentFixture<UseFacilityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseFacilityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseFacilityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
