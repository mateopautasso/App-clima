import { useContext } from 'react';
import { WeatherContext } from '../contexts/weather-context';
import { CardHighlights } from './card-highlights';
import './today-highlights.css';

export function TodayHighlights() {

    const { weather } = useContext(WeatherContext);

    return (
        <div>
            <CardHighlights />
            <CardHighlights />
            <CardHighlights />
            <CardHighlights />
        </div>
    )
}