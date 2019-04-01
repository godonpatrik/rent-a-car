import { Component, OnInit } from '@angular/core';
import { CarService } from '../add-car/add-car.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  cars = [];

  constructor(private carService: CarService) { }

  async ngOnInit() {
    this.cars = await this.carService.getCars();
  }

}
