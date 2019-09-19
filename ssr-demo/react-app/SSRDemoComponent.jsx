import React, { useState, useEffect } from 'react';

const SSRDemoComponent = () => {
  const [interactive, setInteractive] = useState(false);

  let text = 'I am initial headline. Rendered server side';
  if (interactive) {
    text = 'I am SPA!';
  }

  useEffect(() => {
    setInteractive(true);
  }, []);

  return <h1>{text}</h1>;
};

export default SSRDemoComponent;
