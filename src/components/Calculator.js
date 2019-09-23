import React, { useState } from 'react';

import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';
import {
  toCelsius,
  toFahrenheit,
  tryConvert,
} from '../utils';

const SCALES = {
  c: 'c',
  f: 'f',
};

export default function Calculator() {
  const { c, f } = SCALES;
  // hooks
  const [currentTemperature, setTemperature] = useState({ scale: 'c', temperature: 0 });

  // handler on hooks
  const handleTemperatureChange = scale => ({ target: { value } }) => setTemperature({ scale, temperature: value });

  // data
  const { scale, temperature } = currentTemperature;
  const celsius = scale === f ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === c ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale={c}
        temperature={celsius}
        onTemperatureChange={handleTemperatureChange(c)}
      />
      <TemperatureInput
        scale={f}
        temperature={fahrenheit}
        onTemperatureChange={handleTemperatureChange(f)}
      />
      <BoilingVerdict
        celsius={parseFloat(celsius)}
      />
    </div>
  );
}