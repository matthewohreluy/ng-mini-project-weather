import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import {ConditionsAndZip} from '../conditions-and-zip.type';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentConditionsComponent{

  private weatherService = inject(WeatherService);
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();
  closeTabFn = (index: number) =>{ this.locationService.removeLocation(this.currentConditionsByZip()[index].zip)}


  getTabs(){
   return this.currentConditionsByZip().map(condition=> `${condition.data.name} (${condition.zip})`)
  }

}
