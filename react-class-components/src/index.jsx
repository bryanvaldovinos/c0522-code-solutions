import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  render() {
    return <button>{ this.props.text }</button>;
  }
}

const element = (
  <div>
    <CustomButton text="I" name="chicken"/>
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
