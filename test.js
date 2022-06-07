"use strict";
exports.__esModule = true;
exports.WeatherStationService = void 0;
var https = require("https");
var city = 'London';
var numberOfDays = '5';
https.get("https://api.weatherapi.com/v1/forecast.json?key=2bf0244e84c943979da55420222802&q=" + city + "&days=" + numberOfDays + "&aqi=no&alerts=no", function (res) {
    var data = "";
    var params = 
    // A chunk of data has been recieved.
    res.on("data", function (chunk) {
        data += chunk;
    });
    res.on("end", function () {
        var reData = JSON.parse(data);
        console.log(reData);
    });
});
// getWeatherData() {
// }
var WeatherStationService = /** @class */ (function () {
    function WeatherStationService() {
    }
    // baseUrl: 'https://api.weatherapi.com/v1/forecast.json?key=2bf0244e84c943979da55420222802&q=Ulaanbaatar&days=5&aqi=no&alerts=no';
    WeatherStationService.getForecast = function (city) {
        https.get("https://api.weatherapi.com/v1/forecast.json?key=2bf0244e84c943979da55420222802&q=" + city + "&days=5&aqi=no&alerts=no", function (res) {
            var data = "";
            var params = 
            // A chunk of data has been recieved.
            res.on("data", function (chunk) {
                data += chunk;
            });
            res.on("end", function () {
                var reData = JSON.parse(data);
                console.log(reData);
            });
        });
    };
    return WeatherStationService;
}());
exports.WeatherStationService = WeatherStationService;
