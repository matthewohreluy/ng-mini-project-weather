import {Injectable, OnDestroy, Signal, signal} from '@angular/core';
import {Observable, Subscription, from, of, throwError} from 'rxjs';
import { catchError, mergeMap, switchMap, tap } from 'rxjs/operators';

import {HttpClient} from '@angular/common/http';
import {CurrentConditions} from './current-conditions/current-conditions.type';
import {ConditionsAndZip} from './conditions-and-zip.type';
import {Forecast} from './forecasts-list/forecast.type';
import { LOCATIONS, LocationService } from './location.service';
import { compareArrays } from './helper';
import { CachingService } from './caching.service';
import { ForecastsAndZip } from './forecasts-and-zip.type';

export const CONDITIONS : string = "conditions";
export const FORECASTS : string = "forecasts"

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
    private cachingService: CachingService) { 
    // this.getCurrentConditionsFromCache()
    // this.getForecastsFromCache()
    this.subscription.add(this.locationService.locations$
      .pipe(

        switchMap((locations: string[])=>from(locations)),
        mergeMap(data=>this.addCurrentConditions(data))
      )
      .subscribe())
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  getCurrentConditionsFromCache(){
    let conditionsData = this.cachingService.get<ConditionsAndZip[]>(CONDITIONS);
    if (conditionsData){
      this.currentConditions.update(conditions => {return [...conditionsData,...conditions]})
      console.log(this.currentConditions());
    }
  }

  getForecastsFromCache(){
    let forecastData = this.cachingService.get<ForecastsAndZip[]>(FORECASTS);
    if (forecastData){
      this.fiveDayForecasts.update(forecast => {return [...forecastData,...forecast]})
      console.log(this.fiveDayForecasts());
    }
  }

  addCurrentConditions(zipcode: string):Observable<CurrentConditions> {
    return this.http.get<CurrentConditions>(`${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`)
      .pipe(
        tap(data => {
          this.currentConditions.update(conditions => [...conditions, {zip: zipcode, data, timeStamp: this.cachingService.getMillisecondsNow()}]);
          console.log(this.currentConditions());
          this.cachingService.set<ConditionsAndZip[]>(CONDITIONS,this.currentConditions())
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
    ).pipe(tap(()=>this.cachingService.set<ConditionsAndZip[]>(CONDITIONS,this.currentConditions())))
  }

  getCurrentConditions(): Signal<ConditionsAndZip[]> {
    return this.currentConditions.asReadonly();
  }

  getForecast(zipcode: string): Observable<Forecast> {
    return this.http.get<Forecast>(`${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`)
    .pipe(
      tap(data => {
        this.fiveDayForecasts.update(fiveDayForecasts => [...fiveDayForecasts, {zip: zipcode, data, timeStamp: this.cachingService.getMillisecondsNow()}]);
        this.cachingService.set<ForecastsAndZip[]>(FORECASTS,this.fiveDayForecasts())
      }),
      catchError((error)=>{
        this.locationService.removeLocation(zipcode);
        alert('Unable to fetch zipcode');
        return throwError(error);
      })
    )
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
