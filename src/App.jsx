import './App.css';

//components
import { ComponentContext } from './contexts/weather-context';
import { WeatherCard } from './components/weather-card';


function App() {

	return (
		<div className="App">
			<ComponentContext>
				<WeatherCard />
			</ComponentContext>
		</div>
	);
}

export default App;
