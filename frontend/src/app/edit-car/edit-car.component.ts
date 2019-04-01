import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../add-car/add-car.service';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class CarEditComponent implements OnInit {

  id: number = null;
  car: Car = new Car();
  title = 'Add new car';

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location,
    private router: Router,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.car = await this.carService.getCar(this.id);
      this.title = 'Edit selected car';
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
