import React, { useState } from 'react';
import { NameContext } from './contexts';
import Form from './Form';
import Result from './Result';

const ContextExample = () => {
  const [name, setName] = useState('');

  return (
    <>
      <NameContext.Provider value={{
        name,
        setName: (newName) => setName(newName),
      }}
      >
        <h2>React context</h2>
        <Form />
        <Result />
      </NameContext.Provider>
    </>
  );
};

export default ContextExample;
