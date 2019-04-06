import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRentComponent } from './details-rent.component';

describe('DetailsRentComponent', () => {
  let component: DetailsRentComponent;
  let fixture: ComponentFixture<DetailsRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
