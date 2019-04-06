import { Component, OnInit } from '@angular/core';
import { Rent } from '../Rent';
import { RentService } from '../add-rent/add-rent.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-rent',
  templateUrl: './details-rent.component.html',
  styleUrls: ['./details-rent.component.css']
})
export class DetailsRentComponent implements OnInit {

  id:number;
  rent:Rent;

  constructor(
    private route: ActivatedRoute,
    private rentService: RentService,
    private router: Router
  ) { }

  async ngOnInit() {
    const id = await this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.rent = await this.rentService.getRent(this.id);
    }
  }
  navigateToEdit(){
    this.router.navigate([`/rents/${this.id}/edit`]);
  }


}
