import React from 'react';
import { string } from 'prop-types';
import Card from './Card';

const ResultContainer = ({ name }) => (
  <Card>
    <h3>
      Your name is: {name}
    </h3>
  </Card>
);

ResultContainer.propTypes = {
  name: string,
};

ResultContainer.defaultProps = {
  name: '',
};


export default ResultContainer;
