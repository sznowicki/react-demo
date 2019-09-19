import React from 'react';
import PropsDrilling from './PropsDrilling';
import Context from './Context';
import Redux from './Redux'

const App = () => (
  <>
    <h2>ReactJS data flow</h2>
    <section>
      <PropsDrilling />
      <Context />
      <Redux />
    </section>
  </>
);

export default App;
