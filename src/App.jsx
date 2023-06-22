import './App.css';

//components
import { ComponentContext } from './contexts/weather-context';
import { WeatherCard } from './components/weather-card';
import { NextDays } from './components/next-days';


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
