import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';
import { PersonService } from '../add-person/add-person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  
  id: number = null;
  person: Person = new Person();
  title = 'Adding new person';

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location,
    private router: Router,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.person = await this.personService.getPerson(this.id);
      this.title = 'Editing selected person';
    }
  }
  async onFormSave(person: Person) {
    if (this.id) {
      await this.personService.modifyPerson(this.id, person);
      this.location.back();
    } else {
      await this.personService.addPerson(person);
      this.router.navigate(['/addPerson']);
    }
  }

}
