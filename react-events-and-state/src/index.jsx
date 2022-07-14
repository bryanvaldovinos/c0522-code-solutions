import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };

  }

  render() {
    if (this.state.isClicked) {
      return <button onClick={this.state}> {this.props.text2} </button>;
    } else {
      return <button onClick={this.handleClick}> {this.props.text1} </button>;
    }
  }

  handleClick() {
    this.setState({ isClicked: true });
  }
}

const element = (
  <div>
    <CustomButton text1="Click Me!" text2="Thank You!" />
  </div>
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
