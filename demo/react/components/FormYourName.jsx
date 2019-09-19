import React, { useCallback, useRef } from 'react';
import { func } from 'prop-types';
import Card from './Card';

const FormYourName = ({ onChange, onSubmit }) => {
  const data = useRef({
    name: '',
  });

  const handleChange = useCallback(
    (e) => {
      data.current[e.target.name] = e.target.value;
      onChange(data.current);
    },
    [data, onChange]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(data.current);
    },
    [data, onSubmit]
  );

  return (
    <Card>
      <form action="#" onSubmit={handleSubmit}>
        <h3>Please type your name</h3>
        <label htmlFor="input-name-react">
          Name
          <input type="text" name="name" onChange={handleChange} defaultValue="" id="input-name-react" />
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
    </Card>
  );
};

FormYourName.propTypes = {
  onChange: func.isRequired,
  onSubmit: func.isRequired,
};

export default FormYourName;
