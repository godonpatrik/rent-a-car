import { Component, OnInit, EventEmitter, Output, Input, OnChanges, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Rent } from '../Rent';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'app-add-rent',
  templateUrl: './add-rent.component.html',
  styleUrls: ['./add-rent.component.css']
})
export class AddRentComponent implements OnInit, OnChanges {

  rentForm = this.fb.group({
    idCardNumber: ['', [Validators.required]],
    bankAccountNumber: ['', [Validators.required]],
    startOfRent: ['', [Validators.required]],
    endOfRent: ['', [Validators.required]],
    fullName: ['', [Validators.required]]
  });

  @ViewChild(MatSelect)selectComponent:MatSelect;
  @Input() rent: Rent;

  @Output() save = new EventEmitter<Rent>();
  
  get idCardNumber() { return this.rentForm.get('idCardNumber');}
  get bankAccountNumber() { return this.rentForm.get('bankAccountNumber');}
  get startOfRent(){ return this.rentForm.get('startOfRent');}
  get endOfRent(){ return this.rentForm.get('endOfRent');}
  get fullName() {return this.rentForm.get('fullName');}
  
  constructor(private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.rentForm.patchValue(this.rent);
  }


  onSubmit() {
    this.save.emit(
      Object.assign(new Rent(), this.rentForm.value)
    );
  }

}
