import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import csc, { ICountry, IState } from "countries-states-cities"

@Injectable({
  providedIn: 'root'
})
export class ShopFormService {

  constructor() { }

  getCreditCardMonths(startMonth: number): Observable<number[]> {
    let data: number[] = [];

    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }

    return of(data);
  }

  getCreditCardYears(): Observable<number[]> {
    let data: number[] = [];

    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;

    for (let theYear = startYear; theYear <= endYear; theYear++) {
      data.push(theYear);
    }
    return of(data);
  }

  getAllCountries() {
    let countriesI: ICountry[] = [];

    countriesI = csc.getAllCountries();

    return of(countriesI);
  }

  getState(countryID: number) {
    let state: IState[] = [];
    state = csc.getStatesOfCountry(countryID);

    return of(state);
  }

  //handleStateTest(countryID: string) {
  //this.country = csc.getCountryByCode(countryID);
  //this.states = csc.getStatesOfCountry(this.country.id);
  //}
}
