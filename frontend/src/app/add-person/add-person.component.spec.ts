import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonComponent } from './add-person.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonToggleModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatMenuModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

describe('AddPersonComponent', () => {
  let component: AddPersonComponent;
  let fixture: ComponentFixture<AddPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonComponent ],
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
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
