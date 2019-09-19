/* global alert */
import React, { useState, useCallback } from 'react';
import FormYourName from './FormYourName';
import ResultContainer from './ResultContainer';

const App = () => {
  const [name, setName] = useState('');

  const handleChange = useCallback(
    ({ name: newName }) => {
      console.log('react name change', newName);
      setName(newName);
    },
    [setName]
  );

  const handleSubmit = useCallback(
    () => {
      alert(`ReactJS submit: ${name}`);
    }
  );

  return (
    <>
      <h2>ReactJS</h2>
      <FormYourName onSubmit={handleSubmit} onChange={handleChange} />
      <ResultContainer name={name} />
    </>
  );
};

export default App;
