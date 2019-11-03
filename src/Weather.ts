import { Coordinate } from './Coordinate'

export const WeatherDay = (
	date: string,
	weekday: string,
	minTemp: number,
	maxTemp: number,
	windSpeed: number,
	windDirection: number,
	icon: string
) => ({
	date,
	weekday,
	minTemp,
	maxTemp,
	windSpeed,
	windDirection,
	icon
})

export interface WeatherDay extends ReturnType<typeof WeatherDay> {}

export const FiveDayForecast = (
	coordinate: Coordinate,
	day1: WeatherDay,
	day2: WeatherDay,
	day3: WeatherDay,
	day4: WeatherDay,
	day5: WeatherDay,
) => ({
	coordinate,
	days: [day1, day2, day3, day4, day5]
})

export interface FiveDayForecast extends ReturnType<typeof FiveDayForecast> {}