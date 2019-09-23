import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

export default function TemperatureInput(props) {
  const { scale, temperature, onTemperatureChange } = props;

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        value={temperature}
        onChange={onTemperatureChange}
      />
    </fieldset>
  );
}