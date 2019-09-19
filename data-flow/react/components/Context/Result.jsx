import React, { useContext } from 'react';
import { NameContext } from './contexts';
import Card from '../Card';

const Result = () => {
  const { name } = useContext(NameContext);

  return (
    <Card>
      Name is {name}
    </Card>
  );
};

export default Result;
