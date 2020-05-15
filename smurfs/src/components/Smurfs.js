import React, { useContext } from 'react';

import SmurfContext from '../context';

const Smurfs = () => {
  const smurf = useContext(SmurfContext);
  console.log({ smurf });

  return (
    <div className="smurfsCard">
      {smurf.map((smurfs) => (
        <div className="smurf">
          <h2>{smurfs.name}</h2>
          <p>{smurfs.age}</p>
          <p>{smurfs.height}</p>
          {/* <img src="#" alt="Random Smurf" /> */}
        </div>
      ))}
    </div>
  );
};

export default Smurfs;
