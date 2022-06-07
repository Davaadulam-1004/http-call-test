import * as https from "https";
let city = 'London';
let numberOfDays = '5';
https.get("https://api.weatherapi.com/v1/forecast.json?key=2bf0244e84c943979da55420222802&q="+ city +"&days="+ numberOfDays +"&aqi=no&alerts=no", function (res) {
  let data = "";
  let params = 
  // A chunk of data has been recieved.
  res.on("data", chunk => {
    data += chunk;
  });
  res.on("end", () => {
    let reData = JSON.parse(data);
    console.log(reData);
  });
});

// getWeatherData() {
  
// }
export class WeatherStationService {
    // baseUrl: 'https://api.weatherapi.com/v1/forecast.json?key=2bf0244e84c943979da55420222802&q=Ulaanbaatar&days=5&aqi=no&alerts=no';

    public static getForecast(city: string) {
      https.get("https://api.weatherapi.com/v1/forecast.json?key=2bf0244e84c943979da55420222802&q="+ city +"&days=5&aqi=no&alerts=no", function (res) {
        let data = "";
        let params = 
        // A chunk of data has been recieved.
        res.on("data", chunk => {
          data += chunk;
        });
        res.on("end", () => {
          let reData = JSON.parse(data);
          console.log(reData);
        });
      });
    }
}
