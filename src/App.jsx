import './App.css';

import { useContext } from 'react';

//components
import { ComponentContext } from './contexts/weather-context';
import { WeatherCard } from './components/weather-card';
import { NextDays } from './components/next-days';
import { TodayHighlights } from './components/today-highlights';


function App() {

	return (
		<div className="App">
			<ComponentContext>
				<WeatherCard />
				<NextDays />
			</ComponentContext>
		</div>
	);
}

export default App;
