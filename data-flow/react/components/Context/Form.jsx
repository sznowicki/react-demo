import React, { useContext } from 'react';
import { NameContext } from './contexts';
import Card from '../Card';

const Form = () => {
  const { setName } = useContext(NameContext);

  return (
    <Card>
      <form action="#">
        <input type="name" defaultValue="" onChange={(e) => setName(e.target.value)} />
      </form>
    </Card>
  );
};

export default Form;
