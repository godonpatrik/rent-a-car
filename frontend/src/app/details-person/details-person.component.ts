import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';
import { PersonService } from '../add-person/add-person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-person',
  templateUrl: './details-person.component.html',
  styleUrls: ['./details-person.component.css']
})
export class DetailsPersonComponent implements OnInit {

  id: number;
  person: Person;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
  ) { }

  async ngOnInit() {
    const id = await this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.person = await this.personService.getPerson(this.id);
    }
  }

}
