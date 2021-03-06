import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Property } from '../model/property';
import { environment } from '../../environments/environment';
import { Ikeyvaluepair } from '../model/ikeyvaluepair';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getAllCities(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + '/city/Cities');
  }

  getPropertyTypes(): Observable<Ikeyvaluepair[]> {
    return this.http.get<Ikeyvaluepair[]>(this.baseUrl + '/propertytype/list');
  }

  getFurnishingTypes(): Observable<Ikeyvaluepair[]> {
    return this.http.get<Ikeyvaluepair[]>(
      this.baseUrl + '/furnishingtype/list'
    );
  }

  getProperty(id: number) {
    return this.http.get<string[]>(this.baseUrl + '/property/detail/' + id);
  }

  getAllProperties(SellRent?: number): Observable<Property[]> {
    return this.http.get<Property[]>(
      this.baseUrl + '/property/list/' + SellRent
    );
  }
  addProperty(property: Property) {
    let newarray = [];
    let newProp = JSON.parse(localStorage.getItem('newProp')!);
    if (newProp) {
      for (const id in newProp) {
        newarray.push(newProp[id]);
      }
    }
    newarray.push(property);
    localStorage.setItem('newProp', JSON.stringify(newarray));
  }
  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(localStorage.getItem('PID')! + 1));
      return +localStorage.getItem('PID')!;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
  getPropertyAge(dateofEstablishment: Date): string {
    const today = new Date();
    const estDate = new Date(dateofEstablishment);
    let age = today.getFullYear() - estDate.getFullYear();
    const m = today.getMonth() - estDate.getMonth();
    console.log(dateofEstablishment);

    // Current month smaller than establishment month or
    // Same month but current date smaller than establishment date
    if (m < 0 || (m === 0 && today.getDate() < estDate.getDate())) {
      age--;
    }
    //Establishment date is future date
    if (today < estDate) {
      return '0';
    }
    //Age is less than a year
    if (age === 0) {
      return 'Less than a year';
    }
    return age.toString();
  }
}
