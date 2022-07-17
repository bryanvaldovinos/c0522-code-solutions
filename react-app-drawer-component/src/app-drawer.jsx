import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  sidebar() {
    if (this.state.isClicked === false) {
      return 'hidden';
    }
    if (this.state.isClicked === true) {
      return '';
    }
  }

  render() {
    const stat = this.sidebar();
    return (
      <div>
        <div className="row">
          <div className="col-10">
          <i onClick={this.handleClick} className="fa-solid fa-bars"></i>
          </div>
          <div className="col-80 fit">
          <img src="images/runner.png"></img>
          </div>
        </div>
        <div className="row">
          <div className="col-20">
            <div className={`sidebar ${stat}`}>
              <h3>Choose an Event</h3>
              <h4><a onClick={this.handleClick}>3200m</a></h4>
              <h4><a onClick={this.handleClick}>1600m</a></h4>
              <h4><a onClick={this.handleClick}>800m</a></h4>
              <h4><a onClick={this.handleClick}>400m</a></h4>
            </div>
          </div>
          <div className="col-80">
            <div onClick={this.handleClick} className={`sidediv ${stat}`}>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
