import { request } from "../tools/request";

export const getWeather = async (lat, lng) => {
    const optionsRequest = {
        method: 'GET',
        url: 'https://api.weatherapi.com/v1/forecast.json?key=219bd80bc25a4d1f958180547230306&days=5&aqi=no&alerts=no',
        params: {
            lang: 'es',
            q: `${lat},${lng}`
        }
    }
    return await request(optionsRequest)
}