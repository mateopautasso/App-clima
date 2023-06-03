//Deps
import { createContext, useState, useEffect } from "react";

//Services
import { getCountries } from "../services/countries";
import { getCities } from '../services/cities';
import { getWeather } from '../services/weather';

export const WeatherContext = createContext();

export function ComponentContext({ children }) {

	const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
	const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const [countries, setCountries] = useState([]);
	const [cities, setCities] = useState([]);
	const [weather, setWeather] = useState(undefined)
	const [day, setDay] = useState(null)

	useEffect(() => {
		
		(async ()=>{
			const resCountries = await getCountries();
			resCountries.sort((a, b) => {
				const nameA = a.name.common.toUpperCase();
				const nameB = b.name.common.toUpperCase();
			
				if (nameA < nameB) {
				  return -1;
				}
				if (nameA > nameB) {
				  return 1;
				}
				return 0;
			  });
			setCountries(resCountries);
			
			const date = new Date();
			setDay({
					day: daysOfWeek[date.getDay()],
					numberDay: date.getDay() + 1,
					month: months[date.getMonth()]
			})
		})();
		
	}, []);

	const countryHandler = async (e) => {
		const resCities = await getCities(e.currentTarget.value)
		setCities(resCities.geonames)
	}

	const cityHandler = async (e) => {
		const resWeather = await getWeather(e.currentTarget.value)
		console.log(resWeather)
		if(resWeather !== 404) {
			setWeather({
				temp: resWeather.main.temp,
				description: resWeather.weather[0].description,
				icon: resWeather.weather[0].icon,
				nameCity: resWeather.name
			})
		} else {
			setWeather(null)
		}

	}

    return(
        <WeatherContext.Provider value={{countries, cities, weather, day, countryHandler, cityHandler}}>
			{children}
        </WeatherContext.Provider>
    )
}