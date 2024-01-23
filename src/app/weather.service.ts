import {Injectable, OnDestroy, Signal, signal} from '@angular/core';
import {Observable, Subscription, from, of, throwError} from 'rxjs';
import { catchError, mergeMap, switchMap, tap } from 'rxjs/operators';

import {HttpClient} from '@angular/common/http';
import {CurrentConditions} from './current-conditions/current-conditions.type';
import {ConditionsAndZip} from './conditions-and-zip.type';
import {Forecast} from './forecasts-list/forecast.type';
import { LocationService } from './location.service';
import { compareArrays } from './helper';
import { StorageService } from './storage.service';
import { ForecastsAndZip } from './forecasts-and-zip.type';

export const CONDITIONS : string = "conditions";

@Injectable()
export class WeatherService implements OnDestroy {

  static URL = 'http://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  private currentConditions = signal<ConditionsAndZip[]>([]);
  private fiveDayForecasts = signal<ForecastsAndZip[]>([]);
  private subscription: Subscription =  new Subscription();
  constructor(
    private http: HttpClient, 
    private locationService: LocationService,
    private storageService: StorageService) { 
    this.subscription.add(this.locationService.locations$
      .pipe(
        switchMap((locations: string[])=>{
          const addArray = compareArrays(locations, this.currentConditions().map(location=> location.zip));
          const removeArray = compareArrays(this.currentConditions().map(location=> location.zip),locations);
          if(addArray.length > 0 ) return from(addArray).pipe(mergeMap(data=>this.addCurrentConditions(data)));
          else if(removeArray.length > 0) return from(removeArray).pipe(mergeMap(data=>this.removeCurrentConditions(data)));
          return of(null);
        }),
      )
      .subscribe())
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  addCurrentConditions(zipcode: string):Observable<CurrentConditions> {
    return this.http.get<CurrentConditions>(`${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`)
      .pipe(
        tap(data => {
          this.currentConditions.update(conditions => [...conditions, {zip: zipcode, data}]);
          this.storageService.set<ConditionsAndZip[]>(CONDITIONS,this.currentConditions())
        }),
        catchError((error)=>{
          this.locationService.removeLocation(zipcode);
          alert('Unable to fetch zipcode');
          return throwError(error);
        })
      )
  }

  removeCurrentConditions(zipcode: string): Observable<any> {
   return of(
    this.currentConditions.update(conditions => {
      for (let i in conditions) {
        if (conditions[i].zip == zipcode)
          conditions.splice(+i, 1);
      }
      return conditions;
      })
    ).pipe(tap(()=>this.storageService.set<ConditionsAndZip[]>(CONDITIONS,this.currentConditions())))
  }

  getCurrentConditions(): Signal<ConditionsAndZip[]> {
    return this.currentConditions.asReadonly();
  }

  getForecast(zipcode: string): Observable<Forecast> {
    return this.http.get<Forecast>(`${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`);
  }

  getWeatherIcon(id): string {
    if (id >= 200 && id <= 232)
      return WeatherService.ICON_URL + "art_storm.png";
    else if (id >= 501 && id <= 511)
      return WeatherService.ICON_URL + "art_rain.png";
    else if (id === 500 || (id >= 520 && id <= 531))
      return WeatherService.ICON_URL + "art_light_rain.png";
    else if (id >= 600 && id <= 622)
      return WeatherService.ICON_URL + "art_snow.png";
    else if (id >= 801 && id <= 804)
      return WeatherService.ICON_URL + "art_clouds.png";
    else if (id === 741 || id === 761)
      return WeatherService.ICON_URL + "art_fog.png";
    else
      return WeatherService.ICON_URL + "art_clear.png";
  }

}
