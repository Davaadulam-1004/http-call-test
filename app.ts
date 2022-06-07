// import { WeatherStationService } from "./test";
// import * as readline from 'readline';

// interface Weather {
//     location: {
//         name:string
//     }
//     current: {
//         last_updated: string
//         temp_c: number
//         temp_f: number
//     }
//     forecast: {
//         forecastday: Array <{
//             date: string
//             day: string
//             hour: string
//             }>
//         }
//     }

// let city: string;
// let days:string
// let r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// r1.question("Ta tsag agaariin medeelel avah hotiin neriig oruulna uu:", (answer)=>{
//     console.log(location);
//     if(answer){
//         WeatherStationService.getForecast(answer);
//     }
// })
import { WeatherStationService } from "./test";
import * as readline from 'readline';

let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Ta tsag agaariin medeelel avah hotiin neriig oruulna uu:", (answer)=>{
    if(answer){
        WeatherStationService.getForecast(answer);
    }
})








