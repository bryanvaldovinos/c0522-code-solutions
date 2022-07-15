import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  resetCount() {
    if ((this.state.count > 0) && (!this.state.isPlaying)) {
      this.setState({
        count: 0
      });
    }
  }

  handleClick() {
    this.setState({
      isPlaying: !this.state.isPlaying
    });

    if (!this.state.isPlaying) {
      this.interval = setInterval(() => {
        this.setState({
          count: this.state.count + 1
        });
      }, 1000);
    } else if (this.state.isPlaying) {
      clearInterval(this.interval);
    }
  }

  status() {
    if (!this.state.isPlaying) return 'play';
    if (this.state.isPlaying) return 'pause';
  }

  render() {
    const status = this.status();
    return (
      <div>
        <div className="circle">
          <div onClick={this.resetCount} className="number">{this.state.count}</div>
        </div>
        <div>
          <i onClick={this.handleClick} className={`fa-solid fa-${status}`}></i>
        </div>
      </div>
    );
  }

}

export default StopWatch;
