import React, { useContext } from 'react';

import SmurfContext from '../context';

const Smurfs = () => {
  const smurf = useContext(SmurfContext);
  console.log({ smurf });

  return (
    <div>
      {smurf.map((smurfs) => (
        <>
          <h2>{smurfs.name}</h2>
          <p>{smurfs.age}</p>
          <p>{smurfs.height}</p>
          <img src="#" alt="Random Smurf" />
        </>
      ))}
    </div>
  );
};

export default Smurfs;
