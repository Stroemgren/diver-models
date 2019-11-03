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
exports.FiveDayForecast = (coordinate, day1, day2, day3, day4, day5) => ({
    coordinate,
    days: [day1, day2, day3, day4, day5]
});
