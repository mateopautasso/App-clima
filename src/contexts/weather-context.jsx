//Deps
import { createContext, useState } from "react";

//Services
import { getWeather } from '../services/weather';

export const WeatherContext = createContext();

export function ComponentContext({ children }) {

	const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
	const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
	const [weather, setWeather] = useState('');
	const [day, setDay] = useState(null);
	const [latlng, setLatlng] = useState(null)

	const latlngHandler = async (value) => {
		setLatlng(value);
	}

	const cityHandler = async () => {
		const resWeather = await getWeather(latlng.lat, latlng.lng)
		console.log(resWeather);
		if(resWeather !== "AxiosError") {
			setWeather({
				temp: resWeather.current.temp_c,
				description: resWeather.current.condition.text,
				icon: resWeather.current.condition.icon,
				nameCity: resWeather.location.name,
				nextDays: resWeather.forecast.forecastday,
				wind_kph: resWeather.current.wind_kph,
				humidity: resWeather.current.humidity,
				visibility: resWeather.current.vis_km,
				presionAtm: resWeather.current.pressure_mb
			})
			const currentDay = new Date(`${resWeather.forecast.forecastday[0].date} GMT-0300`);
			let nextDay, nextDay2
			if(resWeather.forecast.forecastday[1] !== undefined) {
				nextDay = new Date(`${resWeather.forecast.forecastday[1].date} GMT-0300`);
			}
			if(resWeather.forecast.forecastday[2] !== undefined) {
				nextDay2 = new Date(`${resWeather.forecast.forecastday[2].date} GMT-0300`);
			}

			setDay({
					day: daysOfWeek[currentDay.getDay()],
					numberDay: currentDay.getDate(),
					month: months[currentDay.getMonth()],
					nextDays: [
						{
							day: daysOfWeek[nextDay.getDay()],
							numberDay: nextDay.getDate(),
							month: months[nextDay.getMonth()],
							icon: resWeather.forecast.forecastday[1].day.condition.icon
						},
						{
							day: daysOfWeek[nextDay2.getDay()],
							numberDay: nextDay2.getDate(),
							month: months[nextDay2.getMonth()],
							icon: resWeather.forecast.forecastday[2].day.condition.icon
						}
					]
			})
		} else {
			alert('Error en api')
		}
	}

    return(
        <WeatherContext.Provider value={{ weather, day, latlng, cityHandler, latlngHandler}}>
			{children}
        </WeatherContext.Provider>
    )
}