import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      seconds: 0,
      isTicking: false
    };
  //   const intervalId = setInterval(() => {

  //   });
  // }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        isTicking: true
      })
    })
  }
  handleClick() {
    this.setState = ({
      seconds: this.state + 1
    });
  }

  helperClasses() {
    if (this.state.isTicking) {
      return 'play';
    } else {
      return 'pause';
    }
    clearInterval(this.intervalId);
  }

  render() {
    return (
    <div className="container">
      <div className="stopwatch-layout">
        <div className="stopwatch-body">
        <span>{ this.state.seconds }</span>
        </div>
      </div>
    </div>
    );
  }
}

/* <FontAwesomeIcon icon="fa-solid fa-circle-pause" /> */
/* <FontAwesomeIcon icon="fa-solid fa-circle-play" /> */
export default Stopwatch;
