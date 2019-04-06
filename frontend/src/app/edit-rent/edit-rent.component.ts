import { Component, OnInit } from '@angular/core';
import { Rent } from '../Rent';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RentService } from '../add-rent/add-rent.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-rent',
  templateUrl: './edit-rent.component.html',
  styleUrls: ['./edit-rent.component.css']
})
export class EditRentComponent implements OnInit {
  
  id:number = null;
  rent: Rent = new Rent();
  title = 'Adding new rent';

  constructor(
    private route: ActivatedRoute,
    private rentService: RentService,
    private location: Location,
    private router: Router,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.rent = await this.rentService.getRent(this.id);
      this.title = 'Editing selected rent';
    }
  }
  async onFormSave(rent: Rent) {
    if (this.id) {
      await this.rentService.modifyRent(this.id, rent);
      this.location.back();
    } else {
      await this.rentService.addRent(rent);
      this.router.navigate(['/addRent']);
    }
  }


}
