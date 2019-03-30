import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../add-car/add-car.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-edit',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class CarEditComponent implements OnInit {

  id: number = null;
  car: Car = new Car();

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location,
    private router: Router
  ) { }

  async ngOnInit() {
    console.log('helo');
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.car = await this.carService.getCar(this.id);
    }
  }

  async onFormSave(car: Car) {
    if (this.id) {
      await this.carService.modifyCar(this.id, car);
      this.location.back();
    } else {
      await this.carService.addCar(car);
      this.router.navigate(['/addCar']);
    }
  }

}
