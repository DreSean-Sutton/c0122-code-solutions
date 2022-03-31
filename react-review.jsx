import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  // FIRST instantiate a CustomButton object from this class - ONE TIME
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false // establish an initial state
    };
    this.handleClick = this.handleClick.bind(this);
    // create a bound copy of the prototype method handleClick
    // assign the bound copy to an "own" property of this object
    // with a permanent "this" to guarantee the value of "this" when it's called
  }

  handleClick(event) {
    // ONLY decide how to update state by calculating a new state
    event.target.className = 'tim will kill you'; // NO, you're fired.
    // Tell React which state propert(y|ies) to replace
    this.setState({ isClicked: true });
    // please transition to a new state
    // schedules a re-render with a new state (render will be called again)
    // Add a toggle version...
  }

  // 2. React _immediately_ calls the render method after the constructor
  //    Will re-run when this.setState() is called in the future
  render() {
    // ONLY decide how the UI should look
    /**
     * DON'T
     * - manipulate the DOM
     * - update global variables
     * - use timers
     */
    if (this.state.isClicked) {
      return <button>Thanks!</button>; // add an onClick prop for toggling if desired
      /**
       * {
       *   type: 'button',
       *   props: {
       *     children: 'Thanks!'
       *   }
       * }
       */
    }
    return <button onClick={this.handleClick}>{this.props.text}</button>;
    /**
     * {
     *   type: 'button',
     *   props: {
     *     onClick: this.handleClick,
     *     children: 'Click Me!'
     *   }
     * }
     */
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
