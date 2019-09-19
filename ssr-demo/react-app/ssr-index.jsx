/* global document hydratebutton */
import React from 'react';
import { hydrate } from 'react-dom';
import SSRDemoComponent from './SSRDemoComponent';

(function main() {
  let didHydrate = false;
  const doHydrate = () => {
    if (didHydrate) {
      return;
    }
    didHydrate = true;

    hydrate(
      <SSRDemoComponent />,
      document.getElementById('react-root')
    );
  };

  hydratebutton.addEventListener('click', doHydrate);
}());
