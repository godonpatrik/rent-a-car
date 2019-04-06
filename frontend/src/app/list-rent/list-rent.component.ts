import { Component, OnInit } from '@angular/core';
import { RentService } from '../add-rent/add-rent.service';

@Component({
  selector: 'app-list-rent',
  templateUrl: './list-rent.component.html',
  styleUrls: ['./list-rent.component.css']
})
export class ListRentComponent implements OnInit {

  rents = [];

  constructor(private rentService: RentService) { }

  async ngOnInit() {
    this.rents = await this.rentService.getRents();
  }

}
