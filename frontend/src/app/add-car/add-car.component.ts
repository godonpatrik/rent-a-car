import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Car } from '../Car';
import { HttpClient } from '@angular/common/http';
import { CarService } from './add-car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-form',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit, OnChanges {

  persons = [];
  cars = [];

  form = this.fb.group({
    plateNum: ['', [Validators.required]],
    yearOfMake: ['', [Validators.required]],
    km: ['', [Validators.required]],
    color: ['', [Validators.required]],
    startOfParking: ['', [Validators.required]],
    endOfParking: ['', [Validators.required]],
  });

  @Input() car: Car;

  @Output() save = new EventEmitter<Car>();

  get plateNum() { return this.form.get('plateNum'); }
  get yearOfMake() { return this.form.get('yearOfMake'); }
  get km() { return this.form.get('km'); }
  get color() { return this.form.get('color'); }
  get startOfParking() { return this.form.get('startOfParking'); }
  get endOfParking() { return this.form.get('endOfParking'); }

  constructor(private http: HttpClient, private fb: FormBuilder, private carService: CarService, private router: Router) { }

  async ngOnInit() {
    this.persons = await this.carService.getPersons();
    this.cars = await this.carService.getCars();
  }

  ngOnChanges() {
    this.form.patchValue(this.car);
  }

  onSubmit() {
    //Sima addot egyszerűen sehogy nem fogja fel
    const emittedCar = Object.assign(new Car(), this.form.value);
    this.save.emit(emittedCar);
  }

}
