'use strict'

const express = require('express');
const server = express();
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
server.use(cors());
const PORT = process.env.PORT;
const Weather = require('./Weather')
const Movies = require('./movies')



//http://localhost:3011/getWeather?lat=31.95&lon=35.91&cityName=amman
server.get('/getWeather', Weather);


//http://localhost:3011/movies?city=Amman
server.get('/movies', Movies);

 




// // http://localhost:3002/test (/ === root route)

// server.get('/test', (req, res) => {
//     res.send('Hi From the root route');
// })


// // http://localhost:3002/weather?lat=a&lon=b&searchQuery=c

// server.get('/weather', (req, res) => {

//     const lat = Number(req.query.lat);
//     const lon = Number(req.query.lon);
//     const cityName = req.query.searchQuery;

//     const wetherResult = whetherData.find(item => {

//         if (((lat === item.lat) && (lon === item.lon)) && (cityName === item.city_name)) {

//             return item;
//         }
//         else {

//             return '';
//         }

//     })


//     if (wetherResult) {

//         res.send(wetherForecast(wetherResult))
//     }
//     else {
//         res.status(500).send('Not found');
//     }
// })

// const wetherForecast = (wetherObj) => {

//     const forecastArr = [];

//     wetherObj.data.map(element => {

//         const description = `Low of ${element.low_temp} , High of ${element.max_temp} with ${element.weather.description}`;

//         const date = element.datetime;

//         forecastArr.push(new Forecast(date, description));

//     });

//     return forecastArr;


// }



server.listen(PORT, () => {

    console.log(` I am listen = ${PORT} `)
})