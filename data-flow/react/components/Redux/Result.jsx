import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import { getUserName } from '../../redux/selectors';

const Result = () => {
  const name = useSelector(getUserName);

  return (
    <Card>
      Name is {name}
    </Card>
  );
};

export default Result;
