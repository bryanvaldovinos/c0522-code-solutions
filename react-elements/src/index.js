import React from 'react';
import * as ReactDOM from 'react-dom/client';

const $h1 = React.createElement('h1', null, 'Hello, React!');
const container = document.querySelector('#root');
console.log($h1);

const root = ReactDOM.createRoot(container);
root.render($h1);
