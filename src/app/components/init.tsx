import React from 'react';
import { getFactionsinSystem, getSystemsinSphere } from '../functions';

const Init = () => {
  const handleSphere = async () => {
    const response = await getSystemsinSphere();
    console.log(response);
  };
  const handleFaction = async () => {
    const response = await getFactionsinSystem();
    console.log(response);
  };

  return (
    <>
      <button onClick={handleSphere}>Initial Sphere</button>
      <button onClick={handleFaction}>Initial Faction</button>
    </>
  );
};

export { Init };
