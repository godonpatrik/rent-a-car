import { Injectable } from '@angular/core';
import { Person } from '../Person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personUrl = 'http://localhost:8080/persons';

  constructor(
    private http: HttpClient
  ) { }

  getPersons(): Promise<Person[]> {
    return this.http.get<Person[]>(this.personUrl, httpOptions).toPromise();
  }

  getPerson(id): Promise<Person> {
    return this.http.get<Person>(`${this.personUrl}/${id}`, httpOptions).toPromise();
  }

  modifyPerson(id: number, person: Person): Promise<Person> {
    return this.http.put<Person>(
      `${this.personUrl}/${id}`,
      person,
      httpOptions
    ).toPromise();
  }

  addPerson(person: Person): Promise<Person> {
    return this.http.post<Person>(
      `${this.personUrl}`,
      person,
      httpOptions
    ).toPromise();
  }
  
}