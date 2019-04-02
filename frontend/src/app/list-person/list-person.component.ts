import { Component, OnInit } from '@angular/core';
import { PersonService } from '../add-person/add-person.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  persons = [];

  constructor(private personService: PersonService) { }

  async ngOnInit() {
    this.persons = await this.personService.getPersons();
  }

}
