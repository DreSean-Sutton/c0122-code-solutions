import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: true,
      emailValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      emailValue: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.emailValue);
  }

  render() {
    const emailValue = this.state.emailValue;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="email">email
          <input onChange={ this.handleChange } id="email" type="email" value={emailValue} />
        </label>
        <input type="submit" value="Sign Up"/>
      </form>
    );
  }
}
