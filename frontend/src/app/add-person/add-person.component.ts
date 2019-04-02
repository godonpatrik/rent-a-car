import { Component, OnInit, OnChanges, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../Person';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSelect } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from './add-person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit, OnChanges {


  personForm = this.fb.group({
    fullName: ['', [Validators.required]],
    idCardNumber: ['', [Validators.required]],
    bankAccountNumber: ['', [Validators.required]]
  });

  //@ViewChild(MatSelect)selectComponent:MatSelect;
  @Input() person: Person;

  @Output() save = new EventEmitter<Person>();
  
  get fullName() { return this.personForm.get('fullName');}
  get idCardNumber() { return this.personForm.get('idCardNumber');}
  get bankAccountNumber(){ return this.personForm.get('bankAccountNumber');}

  constructor(private fb: FormBuilder, private personService: PersonService, private route: ActivatedRoute) { }
  

  ngOnInit() {
  }

  ngOnChanges(){
    console.log("itt");
    this.personForm.patchValue(this.person);
  }


  onSubmit() {
    this.save.emit(
      Object.assign(new Person(), this.personForm.value)
    );
  }

}
