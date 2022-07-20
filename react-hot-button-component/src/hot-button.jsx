import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    if (this.state.count > 18) {
      return <button onClick={this.handleClick} className="white"> Hot Button </button>;
    }
    if (this.state.count > 15) {
      return <button onClick={this.handleClick} className="yellow"> Hot Button </button>;
    }
    if (this.state.count > 12) {
      return <button onClick={this.handleClick} className="orange"> Hot Button </button>;
    }
    if (this.state.count > 9) {
      return <button onClick={this.handleClick} className="red"> Hot Button </button>;
    }
    if (this.state.count > 6) {
      return <button onClick={this.handleClick} className="light-purple"> Hot Button </button>;
    }
    if (this.state.count > 3) {
      return <button onClick={this.handleClick} className="purple"> Hot Button </button>;
    }
    return <button onClick={this.handleClick} className="plain"> Hot Button </button>;
  }
}

export default HotButton;
