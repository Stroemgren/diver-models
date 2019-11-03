"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherDay = (date, weekday, minTemp, maxTemp, windSpeed, windDirection, icon) => ({
    date,
    weekday,
    minTemp,
    maxTemp,
    windSpeed,
    windDirection,
    icon
});
exports.FiveDayForecast = (day1, day2, day3, day4, day5) => ([day1, day2, day3, day4, day5]);
