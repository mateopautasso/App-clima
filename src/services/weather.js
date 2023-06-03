import { request } from "../tools/request";

export const getWeather = async (city) => {
    const optionsRequest = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
            appid: 'dacd51f220861cb7f47bdf40141eb30b',
            units: 'metric',
            lang: 'es',
            q: city
        }
    }
    return await request(optionsRequest)
}