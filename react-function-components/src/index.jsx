import React from 'react';
import * as ReactDOM from 'react-dom/client';

function Custom() {
  return <button type="button">Click Me!</button>;
}

const element = <Custom />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
