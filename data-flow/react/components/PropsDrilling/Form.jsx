import React from 'react';
import Card from '../Card';

const Form = ({ handleChange }) => (
  <Card>
    <form action="#">
      <input type="name" defaultValue="" onChange={(e) => handleChange(e.target.value)} />
    </form>
  </Card>
);

export default Form;
