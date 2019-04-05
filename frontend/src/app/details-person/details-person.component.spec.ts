import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPersonComponent } from './details-person.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonToggleModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatMenuModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('DetailsPersonComponent', () => {
  let component: DetailsPersonComponent;
  let fixture: ComponentFixture<DetailsPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPersonComponent ],
      imports: [
        RouterTestingModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMenuModule,
        HttpClientModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
