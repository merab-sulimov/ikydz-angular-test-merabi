import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

   private countryNameSource = new BehaviorSubject<string>("");
  currentCountryName = this.countryNameSource.asObservable();

  constructor() { }


  changeCountryName(country: string) {
    // complete this function to notify components
    this.countryNameSource.next(country);
  }
}
