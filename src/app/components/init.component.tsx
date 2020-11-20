import React, { useEffect, useState } from 'react';
import {
  getFactionsinSystem,
  getSystemsinSphere,
  getPossibilities,
  possibilityProgress,
} from '../functions';

const Init = () => {
  const [progress, setProgress] = useState('');

  useEffect(() => {
    possibilityProgress.subscribe(setProgress);
  }, []);

  const handleSphere = async () => {
    const response = await getSystemsinSphere();
    console.log(response);
  };
  const handleFaction = async () => {
    const response = await getFactionsinSystem();
    console.log(response);
  };
  const handlePossibilities = async () => {
    const response = await getPossibilities();
    console.log(response);
  };

  return (
    <>
      <button onClick={handleSphere}>Initial Sphere</button>
      <button onClick={handleFaction}>Initial Faction</button>
      <button onClick={handlePossibilities}>Initial Possibilities</button>
      <p>{progress}</p>
    </>
  );
};

export { Init };
