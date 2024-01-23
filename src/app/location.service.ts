import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CachingService } from './caching.service';

export const LOCATIONS : string = "locations";

@Injectable()
export class LocationService {
  
  private locations: string[] = [];
  private locationsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.locations);
  private cachingService = inject(CachingService);
  locations$: Observable<string[]> = this.locationsSubject.asObservable();



  constructor() {
    let locString = this.cachingService.get<string[]>(LOCATIONS);
    if (locString){
      this.locations = locString;
      this.locationsSubject.next(this.locations);
    }
  }

  addLocation(zipcode : string) {
    this.locations.push(zipcode);
    console.log(this.locations);
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
    this.cachingService.set<string[]>(LOCATIONS, this.locations);
  }
}
