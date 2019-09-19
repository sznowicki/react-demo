import React from 'react';
import { useDispatch } from 'react-redux';
import { setUserName } from '../../redux/actions';

import Card from '../Card';

const Form = () => {
  const dispatch = useDispatch();

  return (
    <Card>
      <form action="#">
        <input type="name" defaultValue="" onChange={(e) => dispatch(setUserName(e.target.value))} />
      </form>
    </Card>
  );
};

export default Form;
