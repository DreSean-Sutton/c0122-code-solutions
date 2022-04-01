import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleHidden = this.handleHidden.bind(this);
    this.handleTransition = this.handleTransition.bind(this);
  }

  toggleNavbar() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  handleHidden(boolean) {
    return boolean ? 'hidden' : '';
  }

  handleTransition() {
    return this.state.drawerOpen
      ? 'navbar-in'
      : 'navbar-out';
  }

  handleOverlay() {
    return this.state.drawerOpen
      ? 'overlay-on'
      : 'overlay-off';
  }

  render() {
    const toggleOverlay = this.handleHidden(!this.state.drawerOpen);
    const overlayAnimation = this.handleOverlay();
    const toggleIcon = this.handleHidden(this.state.drawerOpen);
    return (
      <div className="navbar-container">
            <i onClick={this.toggleNavbar} className={`fa-solid fa-bars navbar ${toggleIcon}`}></i>
        <div onClick={this.toggleNavbar} className= {`overlay ${overlayAnimation} ${toggleOverlay}`}>
          <div className={`navbar-layout ${this.handleTransition()}`}>
            <h1>menu</h1>
            <a href="#">about</a>
            <a href="#">get started</a>
            <a href="#">sign in</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
