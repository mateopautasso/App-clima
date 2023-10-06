import { useContext } from "react";
import { WeatherContext } from "../contexts/weather-context";
import { MiniCard } from "./mini-card";
import { CardHighlights } from "./card-highlights";
import "./next-days.css";

export function NextDays() {
  const { weather, day } = useContext(WeatherContext);
  if (day) {
    console.log(weather.nextDays[0].day.maxtemp_c);
  }

  if (weather !== "") {
    return (
      <div className="right-section-container">
        <h2 className="next-days-title">Próximos días</h2>
        <div className="next-days-container">
          <MiniCard
            day={day.nextDays[0].day}
            icon={day.nextDays[0].icon}
            tempMax={weather.nextDays[0].day.maxtemp_c}
            tempMin={weather.nextDays[0].day.mintemp_c}
          />
          <MiniCard
            day={day.nextDays[1].day}
            icon={day.nextDays[1].icon}
            tempMax={weather.nextDays[1].day.maxtemp_c}
            tempMin={weather.nextDays[1].day.mintemp_c}
          />
          {/* <MiniCard day={day.nextDays[2].day} icon={day.nextDays[2].icon}/>
                    <MiniCard day={day.nextDays[3].day} icon={day.nextDays[3].icon}/> */}
        </div>
        <h2 className="todays-highlights-title">Lo más destacado:</h2>
        <div className="todays-highlights-container">
          <CardHighlights prop="Viento" value={weather.wind_kph} span="kph" />
          <CardHighlights prop="Humedad" value={weather.humidity} span="%" />
          <CardHighlights
            prop="Visibilidad"
            value={weather.visibility}
            span="km"
          />
          <CardHighlights
            prop="Presión del aire"
            value={weather.presionAtm}
            span="mb"
          />
        </div>
      </div>
    );
  }
}
