import React, { useState } from 'react';
import axios from 'axios';

function SmurfForm() {
  const [smurfForm, setSmurfForm] = useState({ name: '', age: 0, height: '' });

  const postRequest = (item) => {
    axios
      .post('http://localhost:3333/smurfs', item)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleOnchange = (event) => {
    setSmurfForm({ ...smurfForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postRequest(smurfForm);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a Smurf!</h1>
      <label>
        <input
          name="name"
          type="text"
          values={smurfForm}
          onChange={handleOnchange}
          placeholder="Smurf Name"
        ></input>
      </label>
      <label>
        <input
          name="age"
          type="number"
          values={smurfForm}
          onChange={handleOnchange}
          placeholder="Smurf Age"
        ></input>
      </label>
      <label>
        <input
          name="height"
          type="text"
          values={smurfForm}
          onChange={handleOnchange}
          placeholder="Smurf Height"
        ></input>
      </label>
      <label>
        <button type="submit">ADD</button>
      </label>
    </form>
  );
}

export default SmurfForm;
