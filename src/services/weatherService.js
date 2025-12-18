// Gọi API weather tại weatherService

import axios from 'axios';

// Coordinates by location name
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// q : City name, state code (only for the US) and country code divided by comma. Please use ISO 3166 country codes.
// appid : Your unique API key 
// limit : Number of the locations in the API response 


// Current and forecasts weather data
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// lat : Latitude, decimal (-90; 90).
// Longitude, decimal (-180; 180).
// appid : Your unique API key 
// exclude (Optional) : By using this parameter you can exclude some parts of the weather data from the API response. (current, minutely,hourly,daily,alerts)
// units (Optional) : Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default.
// lang (Optional) : You can use the lang parameter to get the output in your language.

// Không gây ảnh hưởng gì nên gắn sẵn API_KEY
// Dùng API 2.5 thay vì 3.0
const API_KEY = 'fea81269bbd98f02406eb9f8e4dcff83';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5'

export const fetchWeatherDataByCity = async (city) => {
    try {
        const response = await axios.get(`${WEATHER_URL}/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
                lang: 'vi' 
            }
        });
        return response.data;
    } catch (error) {
        throw error; 
    }
}