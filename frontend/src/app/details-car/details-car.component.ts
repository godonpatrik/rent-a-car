import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../add-car/add-car.service';

@Component({
  selector: 'app-details-car',
  templateUrl: './details-car.component.html',
  styleUrls: ['./details-car.component.css']
})
export class DetailsCarComponent implements OnInit {

  id: number;
  car: Car;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) { }

  async ngOnInit() {
    const id = await this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.car = await this.carService.getCar(this.id);
    }
  }

  navigateToEdit(){
    this.router.navigate([`/cars/${this.id}/edit`]);
  }


}
