export const WeatherDay = (
	date: string,
	weekday: string,
	minTemp: number,
	maxTemp: number,
	wind: number,
	icon: string
) => ({
	date,
	weekday,
	minTemp,
	maxTemp,
	wind,
	icon
})

export interface WeatherDay extends ReturnType<typeof WeatherDay> {}

export const FiveDayForecast = (
	day1: WeatherDay,
	day2: WeatherDay,
	day3: WeatherDay,
	day4: WeatherDay,
	day5: WeatherDay,
) => ([day1, day2, day3, day4, day5])

export interface FiveDayForecast extends ReturnType<typeof FiveDayForecast> {}