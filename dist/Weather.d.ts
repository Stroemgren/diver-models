import { Coordinate } from './Coordinate';
export declare const WeatherDay: (date: string, weekday: string, minTemp: number, maxTemp: number, windSpeed: number, windDirection: number, icon: string) => {
    date: string;
    weekday: string;
    minTemp: number;
    maxTemp: number;
    windSpeed: number;
    windDirection: number;
    icon: string;
};
export interface WeatherDay extends ReturnType<typeof WeatherDay> {
}
export declare const FiveDayForecast: (coordinate: Coordinate, day1: WeatherDay, day2: WeatherDay, day3: WeatherDay, day4: WeatherDay, day5: WeatherDay) => {
    coordinate: Coordinate;
    days: WeatherDay[];
};
export interface FiveDayForecast extends ReturnType<typeof FiveDayForecast> {
}
