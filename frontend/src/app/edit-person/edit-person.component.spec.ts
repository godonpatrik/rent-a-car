import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonComponent } from './edit-person.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpHandler, HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EditPersonComponent', () => {
  let component: EditPersonComponent;
  let fixture: ComponentFixture<EditPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPersonComponent ],
      imports: [ ReactiveFormsModule, MatFormFieldModule, RouterTestingModule ],
      providers: [ HttpClient, HttpHandler ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
