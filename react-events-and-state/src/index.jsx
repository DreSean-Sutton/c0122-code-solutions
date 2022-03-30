import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (!this.state.isClicked) {
      return (
        <button onClick = { this.handleClick }>Click me! </button>
      );
    } else {
      return (
        <button>Thanks!</button>
      );
    }
  }
}

const root =
ReactDOM.createRoot(
  document.querySelector('#root')
);

root.render(<CustomButton />);
