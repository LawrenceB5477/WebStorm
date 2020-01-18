"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const apiKey = "1afe7e74da976a27a5d7daa43ed2e944";
function getCoords(location, callback) {
    axios_1.default.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(location)}.json?access_token=pk.eyJ1Ijoia29kaWFjazU0NzciLCJhIjoiY2s0YXVpa3RyMDc3NjNmcW42YmQ1d2gxcyJ9.1xHVWk1T4mkc_Ma4ocejIQ&limit=1`)
        .then((resFirst) => {
        lat = resFirst.data.features[0].center[0];
        lon = resFirst.data.features[0].center[1];
        callback({ lat, lon, location: resFirst.data.features[0].place_name });
    })
        .catch(error => {
        console.log("There was an error fetching coordinates for " + location);
        console.log(error);
    });
}
getCoords("jacksonville", ({ lat, lon, location }) => {
    console.log(`Location: ${location}`);
    const res = axios_1.default
        .get(`https://api.darksky.net/forecast/${apiKey}/${lon},${lat}?units=us&`);
    res.then(res => {
        const results = res.data;
        console.log(`It is currently ${results.currently.temperature} degrees outside`);
        console.log(`There is a ${results.currently.precipProbability * 100}% chance of rain`);
    }, err => {
        if (err) {
            console.log("There was an error fetching weather data.");
        }
    });
});
