import React from 'react';
import ReactDOM from 'react-dom/client';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOn: false
    };
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    if (this.state.isOn) {
      return (
        <div className = {['container', 'on-switch'].join(' ')}>
          <div className={['row', 'switch-layout'].join(' ')}>
            <div>
              <h1>Tim: React is a</h1>
            </div>
            <div className = 'switch'>
              <div className = {['button-div', 'on-switch', 'justify-right'].join(' ')}>
                <div className = 'button' onClick = { this.handleClick }></div>
              </div>
            </div>
            <div>
              <h2>library</h2>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className = {['container', 'off-switch'].join(' ')}>
          <div className = {['row', 'switch-layout'].join(' ')}>
            <div>
              <h1>Tim: React is a</h1>
            </div>
            <div className = 'switch'>
              <div className = {['button-div', 'off-switch', 'justify-left'].join(' ')}>
                <div className = 'button' onClick = { this.handleClick }></div>
              </div>
            </div>
            <div>
              <h2>framework</h2>
            </div>
          </div>
        </div>
      );
    }
  }
}

const root =
ReactDOM.createRoot(
  document.querySelector('#root')
);

root.render(<ToggleSwitch />);
