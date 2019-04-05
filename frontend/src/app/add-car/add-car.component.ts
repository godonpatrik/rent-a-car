import { Component, OnInit, EventEmitter, Output, Input, OnChanges, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Car } from '../Car';
import { CarService } from './add-car.service';
import { ActivatedRoute } from '@angular/router';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'app-car-form',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit, OnChanges {

  persons = [];
  
  carForm = this.fb.group({
    plateNum: ['', [Validators.required]],
    yearOfMake: ['', [Validators.required]],
    km: ['', [Validators.required]],
    color: ['', [Validators.required]],
    startOfParking: ['', [Validators.required]],
    endOfParking: ['', [Validators.required]],
    personId: ['', [Validators.required]]
  });

  @ViewChild(MatSelect)selectComponent:MatSelect;

  @Input() car: Car;

  @Output() save = new EventEmitter<Car>();

  get plateNum() { return this.carForm.get('plateNum'); }
  get yearOfMake() { return this.carForm.get('yearOfMake'); }
  get km() { return this.carForm.get('km'); }
  get color() { return this.carForm.get('color'); }
  get startOfParking() { return this.carForm.get('startOfParking'); }
  get endOfParking() { return this.carForm.get('endOfParking'); }
  get personId() { return this.carForm.get('personId'); }

  constructor(private fb: FormBuilder, private carService: CarService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.persons = await this.carService.getPersons();
  }

  ngOnChanges() {
    this.carForm.patchValue(this.car);
  }

  onSubmit() {
    this.save.emit( 
      Object.assign(new Car(), this.carForm.value)
    );
  }

}
