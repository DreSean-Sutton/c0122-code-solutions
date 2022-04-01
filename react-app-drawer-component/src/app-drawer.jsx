import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  toggleNavbar() {

  }

  handleClick() {
  }

  render() {
    const overlay = this.state.drawerOpen
      ? ''
      : '';
    return (
      <div className="navbar-container">
        <div className= {`overlay ${overlay}`} />
        <div className="wrapper">
        <div className="row align-items-center justify-between">
            <h1>menu</h1>
            <i className="fa-solid fa-bars navbar"></i>
        </div>
        <a href="#">about</a>
        <a href="#">get started</a>
        <a href="#">sign in</a>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
