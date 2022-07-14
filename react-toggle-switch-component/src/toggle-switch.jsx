import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ status: !this.state.status });
  }

  getStatus() {
    const { status } = this.state;
    if (status) return 'on';
    if (!status) return 'off';
  }

  getBg() {
    const { status } = this.state;
    if (status) return 'bg-green';
    if (!status) return 'bg-gray';
  }

  render() {
    const stat = this.getStatus();
    const bg = this.getBg();
    return (
    <div onClick={this.handleClick} className={`toggle ${bg}`}>
      <div className={stat}></div>
      <div className='text'>{stat}</div>
    </div>
    );
  }
}

export default ToggleSwitch;
