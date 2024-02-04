import './App.css';

//components
import { ComponentContext } from './contexts/weather-context';
import { WeatherCard } from './components/weather-card';
import { NextDays } from './components/next-days';
import Footer from './components/footer';

function App() {
	return (
		<div className='App'>
			<ComponentContext>
				<WeatherCard />
				<NextDays />
			</ComponentContext>
			<Footer />
		</div>
	);
}

export default App;
