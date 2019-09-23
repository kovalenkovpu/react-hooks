import React from 'react';

const BOILING_POINT = 100;

export default function BoilingVerdict({ celsius }) {
  return <p>{`The water would ${celsius >= BOILING_POINT ? '' : 'not '}boil.`}</p>;
}