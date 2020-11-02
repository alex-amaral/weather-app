import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
import { usePosition } from 'use-position';
import City from '../City';
import { Container, Button, CitiesContainer } from './styles';

// import { Container } from './styles';

const mapContainerStyle = {
  height: "400px",
  width: "100%"
}

function Map({ google }) {
  const { latitude: lat, longitude: lng, error } = usePosition()
  const [position, setPosition] = useState({ lat: 38.685, lng: -115.234 })
  const [cities, setCities] = useState([])

  useEffect(() => {
    if (lat && lng && !error) {
      setPosition({
        lat,
        lng
      })
    }
  }, [lat, lng, error])

  const onMapClick = (event) => {
    if (event.latLng) {
      const lat = event.latLng.lat()
      const lng = event.latLng.lng()
      setPosition({ lat, lng })
    }
  }

  const onSearchClick = (event) => {
    event.preventDefault()

    const { lat, lng } = position

    fetch(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&cnt=15&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
      .then(response => response.json())
      .then(json => {
        setCities(json.list)
      })
  }

  return (
    <Container>
      <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY} 
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={position}
          zoom={15}
          onClick={onMapClick}
        >
          <Marker position={position} />
        </GoogleMap>
      </LoadScript>

      <Button onClick={onSearchClick}>
        Search
      </Button>

      <CitiesContainer>
        {cities.map(city => (
          <div key={city.id}>
            <City city={city} />
          </div>
        ))}
      </CitiesContainer>
    </Container>
  );
}

export { Map };