import React from 'react';
import ReactDOM from 'react-dom/client';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCounter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickCounter: this.state.clickCounter + 1 });

  }

  render() {
    return (
      this.state.clickCounter < 4
        ? <button className = "three-clicks" onClick = {this.handleClick}>i&apos;m cold!</button>
        : this.state.clickCounter < 7
          ? <button className = "six-clicks" onClick = {this.handleClick}>more please!</button>
          : this.state.clickCounter < 10
            ? <button className = 'nine-clicks' onClick = {this.handleClick}>that&apos;s better...!</button>
            : this.state.clickCounter < 13
              ? <button className = 'twelve-clicks' onClick = {this.handleClick}>almost...</button>
              : this.state.clickCounter < 16
                ? <button className = 'fifteen-clicks' onClick = {this.handleClick}>a little more!</button>
                : <button className = 'eighteen-clicks' onClick = {this.handleClick}>flaming hot!</button>
    );
  }
}

const root =
  ReactDOM.createRoot(
    document.querySelector('#root')
  );

root.render(<HotButton />);
