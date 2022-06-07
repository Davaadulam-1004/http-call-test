"use strict";
exports.__esModule = true;
var test_1 = require("./test");
var readline = require("readline");
var city;
var days;
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Ta tsag agaariin medeelel avah hotiin neriig oruulna uu:", function (answer) {
    console.log(city, days);
    if (answer) {
        test_1.WeatherStationService.getForecast(answer);
    }
});
