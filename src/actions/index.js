import axios from 'axios';

const API_KEY = '771795487359cf4c6ffa3bef7e20aa47';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    //ajax request returns a promise

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
