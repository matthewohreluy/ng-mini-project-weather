import {Injectable, OnDestroy, Signal, signal} from '@angular/core';
import {Observable, Subscription, from, of, throwError} from 'rxjs';
import { catchError, concatMap, exhaustMap, mergeMap, switchMap, tap, toArray } from 'rxjs/operators';

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

  static URL = 'https://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  private currentConditions = signal<ConditionsAndZip[]>([]);
  private fiveDayForecasts = signal<ForecastsAndZip[]>([]);
  private subscription: Subscription =  new Subscription();
  constructor(
    private http: HttpClient, 
    private locationService: LocationService,
    private cachingService: CachingService) { 
    this.getForecastsFromCache();
    this.subscription.add(this.locationService.locations$
      .pipe(
        switchMap((locations: string[])=> {
          const removeArray = compareArrays(this.currentConditions().map(location=> location.zip),locations);
          if(removeArray.length > 0) {return from(removeArray).pipe(concatMap(data=>this.removeZipCode(data)));}
          else {this.currentConditions.update(()=>[]); return from(locations).pipe(
            mergeMap(data=>this.analyzeCacheConditions(data)),
            toArray()
            );}
        }),
        tap(()=>{this.cachingService.set(CONDITIONS,this.currentConditions())})
      )
      .subscribe())
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }


  getForecastsFromCache(){
    let forecastData = this.cachingService.get<ForecastsAndZip[]>(FORECASTS);
    if (forecastData){
      this.fiveDayForecasts.update(forecast => {return [...forecastData,...forecast]})
    }
  }

  removeZipCode(zipcode: string){
    this.removeCurrentConditions(zipcode);
    this.removeFiveDayForecasts(zipcode);
    this.cachingService.set(FORECASTS,this.fiveDayForecasts())
    return of()
  }
  
  private removeCurrentConditions(zipcode: string): void {
    this.currentConditions.update(conditions => {
      for (let i in conditions) {
        if (conditions[i].zip == zipcode)
          conditions.splice(+i, 1);
      }
      return conditions;
      })
  }

  private removeFiveDayForecasts(zipcode: string): void {
    this.fiveDayForecasts.update(forecast => {
      for (let i in forecast) {
        if (forecast[i].zip == zipcode)
          forecast.splice(+i, 1);
      }
      return forecast;
      })
  }

  getCurrentConditions(): Signal<ConditionsAndZip[]> {
    return this.currentConditions.asReadonly();
  }

  analyzeForecast(zipcode: string): Observable<Forecast>{
    let cacheForecast = this.cachingService.get<ForecastsAndZip[]>(FORECASTS) || [];
    let zipcodeIndex = cacheForecast.findIndex((forecast)=>{return zipcode===forecast.zip});
    let request: Observable<Forecast> = of(null)
    if(zipcodeIndex !== -1){
      if(this.cachingService.shouldRefetchData(cacheForecast[zipcodeIndex].timeStamp)) request = this.getForecast(zipcode)
      else return of(cacheForecast[zipcodeIndex].data);
    }else request = this.getForecast(zipcode);
    return request;
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


  private analyzeCacheConditions(zipcode: string):Observable<CurrentConditions | null> {
    let httpRequest: Observable<CurrentConditions | null> = of(null);
    let cacheConditions = this.cachingService.get<ConditionsAndZip[]>(CONDITIONS) || [];
    let zipcodeIndex = cacheConditions.findIndex((condition)=>{return zipcode===condition.zip});
    if(zipcodeIndex !== -1){ //check if condition in cache
       if(this.cachingService.shouldRefetchData(cacheConditions[zipcodeIndex].timeStamp)) httpRequest = this.fetchCurrentConditions(zipcode) //if condition's time has expired, fetch
       else this.currentConditions.update(conditions => [...conditions, {...cacheConditions[zipcodeIndex]}]); //if condition's time has not expired, update signal
    }else httpRequest = this.fetchCurrentConditions(zipcode) //if condition not in cache, fetch
    return httpRequest;
  }

  private fetchCurrentConditions(zipcode: string):Observable<CurrentConditions | null>{
    return this.http.get<CurrentConditions>(`${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`)
    .pipe(
      tap(data => {
        this.currentConditions.update(conditions => [...conditions, {zip: zipcode, data, timeStamp: this.cachingService.getMillisecondsNow()}]);
      }),
      catchError((error)=>{
        this.locationService.removeLocation(zipcode);
        alert('Unable to fetch zipcode');
        return throwError(error);
      })
    )
  }

  private getForecast(zipcode: string): Observable<Forecast> {
    return this.http.get<Forecast>(`${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`)
    .pipe(
      tap(data => {
        let index = this.fiveDayForecasts().findIndex(forecast=>forecast.zip === zipcode)
        if(index === -1)  this.fiveDayForecasts.update(fiveDayForecasts =>[...fiveDayForecasts, {zip: zipcode, data, timeStamp: this.cachingService.getMillisecondsNow()}]);
        else 
        this.fiveDayForecasts.update(fiveDayForecasts => fiveDayForecasts.map(forecast=>forecast.zip === zipcode ? {zip: zipcode, data, timeStamp: this.cachingService.getMillisecondsNow()}: forecast));
        this.cachingService.set<ForecastsAndZip[]>(FORECASTS,this.fiveDayForecasts())
      }),
      catchError((error)=>{
        this.locationService.removeLocation(zipcode);
        alert('Unable to fetch zipcode');
        return throwError(error);
      })
    )
  }

}
