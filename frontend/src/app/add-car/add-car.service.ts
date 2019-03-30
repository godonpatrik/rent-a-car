import { Injectable } from '@angular/core';
import { Car } from '../Car';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carUrl = 'http://localhost:8080/cars';
  private personUrl = 'http://localhost:8080/persons';

  constructor(
    private http: HttpClient
  ) { }

  getCars(): Promise<Car[]> {
    return this.http.get<Car[]>(this.carUrl, httpOptions).toPromise();
  }

  getCar(id): Promise<Car> {
    return this.http.get<Car>(`${this.carUrl}/${id}`, httpOptions).toPromise();
  }

  modifyCar(id: number, car: Car): Promise<Car> {
    return this.http.put<Car>(
      `${this.carUrl}/${id}`,
      car,
      httpOptions
    ).toPromise();
  }

  addCar(car: Car): Promise<Car> {
    return this.http.post<Car>(
      `${this.carUrl}`,
      car,
      httpOptions
    ).toPromise();
  }

  getPersons(): Promise<[]> {
    return this.http.get<[]>(
      this.personUrl,
      httpOptions
    ).toPromise();
  }
}