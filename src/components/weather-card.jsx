import './weather-card.css'

import { useContext } from 'react';
import { WeatherContext } from '../contexts/weather-context';

import { SearchLocation, SearchYourLocation } from './btns-buscador'

export function WeatherCard() {

    const { countries, cities, weather ,cityHandler ,countryHandler, day } = useContext(WeatherContext)

    return(
        <div className="weatherCard">
            <div className='weatherCard__buscador'>
                <SearchLocation handlerBtn={countryHandler}>
                    <option value="Selecciona">Selecciona</option>
                {
					countries.map((country)=>{
						return <option
							value={country.cca2}
							key={country.cca2}>
							{country.name.common}
						</option>
					})
				}
                </SearchLocation>

                <SearchLocation handlerBtn={cityHandler}>
                    <option value="Selecciona">Selecciona</option>
                {     
					cities.map((city)=>{
						return <option
							value={city.toponymName}
							key={city.geonameId}>
							{city.toponymName}
						    </option>
					})
				}
                </SearchLocation>
                {/* <SearchYourLocation /> */}
            </div>
            {
             weather && 
                <div className='weatherCard__info'>
                    <div className="weatherCard__img">
                        <img src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`} alt="" />
                    </div>
                    <div className="weatherCard__temp">
                        <h1>{Math.round(weather.temp)}<span className='centigrados'>°C</span></h1>
                    </div>
                    <div className='weatherCard__description'>
                        <h4>{weather.description}</h4>
                    </div>
                    <div className="weatherCard__bottom">
                        <p>Hoy - {day.day}, {day.numberDay} de {day.month}</p>
                        <p>{weather.nameCity}</p>
                    </div>
                </div>
            }
            {
                weather === undefined && 
                    <h1> Ingrese una ciudad </h1>
            }
                       {
                weather === null && 
                    <h1> Ciudad no encontrada </h1>
            }

        </div>
    )
}