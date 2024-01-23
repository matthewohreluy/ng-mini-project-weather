import { Forecast } from './forecasts-list/forecast.type';

export interface ForecastsAndZip {
    zip: string;
    data: Forecast;
}
