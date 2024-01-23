import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';

export const LOCATIONS : string = "locations";

@Injectable()
export class LocationService {
  
  private locations: string[] = [];
  private locationsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.locations);
  private storageService = inject(StorageService);
  locations$: Observable<string[]> = this.locationsSubject.asObservable();



  constructor() {
    let locString = this.storageService.get<string[]>(LOCATIONS);
    if (locString){
      this.locations = locString;
      this.locationsSubject.next(this.locations);
    }
  }

  addLocation(zipcode : string) {
    if(this.locations.indexOf(zipcode) !== -1) {alert('Zipcode has already been added'); return;}
    this.locations.push(zipcode);
    this.updateLocationSubject();
  }

  removeLocation(zipcode : string) {
    let index = this.locations.indexOf(zipcode);
    if (index !== -1){
      this.locations.splice(index, 1);
      this.updateLocationSubject();
    }
  }

  private updateLocationSubject(){
    this.locationsSubject.next(this.locations);
    this.storageService.set<string[]>(LOCATIONS, this.locations);
  }
}
