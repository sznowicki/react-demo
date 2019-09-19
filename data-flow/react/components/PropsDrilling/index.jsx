import React, { useState } from 'react';
import Form from './Form';
import Result from './Result';

const PropsDrilling = () => {
  const [name, setName] = useState('');

  return (
    <>
      <h2>Props drilling</h2>
      <Form handleChange={(newName) => setName(newName)} />
      <Result name={name} />
    </>
  );
};

export default PropsDrilling;
