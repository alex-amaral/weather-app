import React, { useState } from 'react';
import { kelvinToCelsius } from '../../utils';

import { Container, MoreInfo } from './styles';

function City({ city }) {
  const [seeMore, setSeeMore] = useState(false)
  const { 
    name,
    wind: { speed },
    main: { temp, temp_min: tempMin, temp_max: tempMax, feels_like: feelsLike }
  } = city

  const toggleSeeMore = () => {
    setSeeMore(!seeMore)
  }

  return (
    <Container onClick={toggleSeeMore}>
      <main>
        <span>{name}</span>
        <span>{kelvinToCelsius(temp)} ºC</span>
      </main>
      
      {seeMore &&
      <MoreInfo>
        <div>
          <p>
            Min: {kelvinToCelsius(tempMin)} ºC
          </p>
          <p>
            Max: {kelvinToCelsius(tempMax)} ºC
          </p>
        </div>
        <div>
          <p>
            Wind: {speed} m/s
          </p>
          <p>
            Feels like: {kelvinToCelsius(feelsLike)} ºC
          </p>
        </div>
      </MoreInfo>}
      
    </Container>
  )
}

export default City;