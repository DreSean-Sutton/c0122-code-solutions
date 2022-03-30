import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (!this.state.isClicked) {
      return (
        <button onClick = { this.handleClick.bind(this) }>Click me! </button>
      );
    } else {
      return (
        <button onClick = { this.handleClick.bind(this) }>Thanks!</button>
      );
    }
  }
}

const root =
ReactDOM.createRoot(
  document.querySelector('#root')
);

root.render(<CustomButton />);
