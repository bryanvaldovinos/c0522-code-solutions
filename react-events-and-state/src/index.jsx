import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      return <button> {this.props.text2} </button>;
    } else {
      return <button onClick={this.handleClick}> {this.props.text1} </button>;
    }
  }

}

const element = (
  <div>
    <CustomButton text1="Click Me!" text2="Thank You!" />
  </div>
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
