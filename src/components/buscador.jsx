import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { WeatherContext } from '../contexts/weather-context';
import './buscador.css'

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        const { latlngHandler } = this.context;
        latlngHandler(latLng);
      })
      .catch((error) => console.error('Error', error));
  };

  handleSubmit = ()=>{
    const { cityHandler } = this.context;
    cityHandler();
  }

  render() {
    return (
      <WeatherContext.Consumer>
        {(context) => (
          <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div style={{width: '100%',position: 'absolute', zIndex: '9999'}}>
                <input
                  value={this.address}
                  {...getInputProps({
                    placeholder: 'Ingrese su ubicación...',
                    className: 'location-search-input',
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? 'suggestion-item suggestion-item--active'
                      : 'suggestion-item';
                    
                    return (
                      <div
                      key={suggestion.description}
                        {...getSuggestionItemProps(suggestion, {
                          className
                        })}
                      >
                        <span
                          onClick={()=>this.handleChange(suggestion.description)}
                        >{suggestion.description}</span>
                      </div>
                    );
                  })}
                    <button className='location-search-btn' onClick={this.handleSubmit}>
                        Realizar búsqueda
                    </button>
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        )}
      </WeatherContext.Consumer>
    );
  }
}

LocationSearchInput.contextType = WeatherContext;

export default LocationSearchInput;