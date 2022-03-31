import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.mountComponent = this.mountComponent.bind(this);
    this.handleTick = this.handleTick.bind(this);
    this.dismountComponent = this.dismountComponent.bind(this);
    this.state = {
      intervalId: null,
      isReset: true,
      isTicking: false,
      seconds: 0
    };
  }

  mountComponent() {
    if (!this.state.isTicking) {
      this.setState({
        isTicking: !this.state.isTicking
      });
      this.handleTick();
    }
    if (this.state.isTicking) {
      this.setState({
        isTicking: !this.state.isTicking
      });
      this.stopTime();
    }
  }

  handleTick() {
    this.setState({
      isReset: false,
      intervalId: setInterval(() => {
        this.setState({
          seconds: this.state.seconds + 1
        });
      }, 1000)
    });
  }

  stopTime() {
    clearInterval(this.state.intervalId);
    this.setState({
      isTicking: false,
      intervalId: null
    });
  }

  dismountComponent() {
    if (!this.state.isTicking) {
      this.setState({
        seconds: 0,
        isReset: true
      });
    }
  }

  coloring() {
    if (this.state.isReset) return 'stop';
    if (this.state.isTicking) return 'play';
    if (!this.state.iTicking) return 'pause';
  }

  helperClasses() {
    if (this.state.isTicking) return 'pause';
    if (!this.state.iTicking) return 'play';
  }

  render() {
    return (
    <div className="container">
      <div className="stopwatch-layout">
          <div onClick={this.dismountComponent} className={`stopwatch-body ${this.coloring()}-border`}>
            <span className={`${this.coloring()}-color`}>{ this.state.seconds }</span>
        </div>
        <div>
            <i onClick={ this.mountComponent } className={`fa-solid fa-circle-${this.helperClasses()} play-pause-buttons`}></i>
        </div>
      </div>
    </div>
    );
  }
}

/* <FontAwesomeIcon icon="fa-solid fa-circle-pause" />; */
export default Stopwatch;
