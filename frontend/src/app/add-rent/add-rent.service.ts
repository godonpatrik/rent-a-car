import { Injectable } from '@angular/core';
import { Rent } from '../Rent';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class RentService {

  private rentUrl = 'http://localhost:8080/renters';

  constructor(
    private http: HttpClient
  ) { }

  getRents(): Promise<Rent[]> {
    return this.http.get<Rent[]>(this.rentUrl, httpOptions).toPromise();
  }

  getRent(id): Promise<Rent> {
    return this.http.get<Rent>(`${this.rentUrl}/${id}`, httpOptions).toPromise();
  }

  modifyRent(id: number, rent: Rent): Promise<Rent> {
    return this.http.put<Rent>(
      `${this.rentUrl}/${id}`,
      rent,
      httpOptions
    ).toPromise();
  }

  addRent(rent: Rent): Promise<Rent> {
    return this.http.post<Rent>(
      `${this.rentUrl}`,
      rent,
      httpOptions
    ).toPromise();
  }
  
}