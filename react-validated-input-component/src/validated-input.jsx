import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordValue: '',
      validPassword: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleHidden = this.handleHidden.bind(this);
  }

  handleInput(event) {
    const password = event.target.value;
    // const myRegex = /(?=[A-Z])(?=\d)(?=[!@#$%^&*)])/g;
    this.setState({
      passwordValue: password
    });
    if (password.length >= 8) {
      this.setState({
        validPassword: true
      });
    } else {
      this.setState({
        validPassword: false
      });
    }
  }

  handleHidden(boolean) {
    if (boolean) return 'hidden';
    if (!boolean) return '';
  }

  render() {
    const valid = this.state.validPassword;
    return (
      <div className="container">
        <div className="row content-layout">
          <form>
            <label htmlFor="password">Password</label>
            <div className="row input-line">
            <input onChange={ this.handleInput } id="password" type="password" />
              <i className={`fa-solid fa-check icons green ${this.handleHidden(!valid)}`}></i>
              <i className={`fa-solid fa-xmark icons red ${this.handleHidden(valid)}`}></i>
            </div>
          </form>
          <p className={ this.handleHidden(valid) }>A password is required.</p>
        </div>
      </div>
    );
  }
}
