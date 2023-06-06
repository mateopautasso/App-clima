import './weather-card.css'

import { useContext } from 'react';
import { WeatherContext } from '../contexts/weather-context';

import LocationSearchInput from './buscador';

export function WeatherCard() {

    const { weather, day } = useContext(WeatherContext)
    
    return(
        <div className="weatherCard">
            <div className='weatherCard__buscador'>

                <LocationSearchInput>
                </LocationSearchInput>

            </div>
            {
             weather && 
                <div className='weatherCard__info'>
                    <div className="weatherCard__temp">
                        <div className="weatherCard__img">
                            <img src={weather.icon.replace('64', '128').replace('64', '128')} alt="" />
                        </div>
                        <h1>{Math.round(weather.temp)}<span className='centigrados'>°C</span></h1>
                    </div>
                    <div className='weatherCard__description'>
                        <h4>{weather.description}</h4>
                    </div>
                    <div className="weatherCard__bottom">
                        <p>Hoy - {day.day} {day.numberDay} de {day.month}</p>
                        <p>{weather.nameCity}</p>
                    </div>
                </div>
            }
            {
                weather === undefined && 
                    <h1 className='weather-undefined-h1'> Ingrese una ciudad </h1>
            }
                       {
                weather === null && 
                    <h1 className='weather-undefined-h1'> Ciudad no encontrada </h1>
            }

        </div>
    )
}