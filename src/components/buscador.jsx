import React, { useState, useContext } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { WeatherContext } from '../contexts/weather-context';
import './buscador.css';

const LocationSearchInput = () => {
	const [address, setAddress] = useState('');
	const weatherContext = useContext(WeatherContext);

	const handleChange = (newAddress) => {
		setAddress(newAddress);
	};

	const handleSelect = (newAddress) => {
		geocodeByAddress(newAddress)
			.then((results) => getLatLng(results[0]))
			.then((latLng) => {
				const { latlngHandler } = weatherContext;
				latlngHandler(latLng);
			})
			.catch((error) => console.error('Error', error));
	};

	const handleSubmit = () => {
		const { cityHandler } = weatherContext;
		cityHandler();
	};

	return (
		<WeatherContext.Consumer>
			{(context) => (
				<PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
					{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
						<div style={{ width: '100%' }}>
							<input
								value={address}
								{...getInputProps({
									placeholder: 'Ingrese su ubicación...',
									className: 'location-search-input',
								})}
							/>
							<div className='autocomplete-dropdown-container'>
								{loading && <div style={{ paddingBlock: '8px' }}>Loading...</div>}
								{suggestions.map((suggestion) => {
									const className = suggestion.active ? 'suggestion-item suggestion-item--active' : 'suggestion-item';

									return (
										<div
											key={suggestion.description}
											{...getSuggestionItemProps(suggestion, {
												className,
											})}
										>
											<span onClick={() => handleChange(suggestion.description)}>{suggestion.description}</span>
										</div>
									);
								})}
								<button className='location-search-btn' onClick={handleSubmit}>
									Realizar búsqueda
								</button>
							</div>
						</div>
					)}
				</PlacesAutocomplete>
			)}
		</WeatherContext.Consumer>
	);
};

export default LocationSearchInput;
