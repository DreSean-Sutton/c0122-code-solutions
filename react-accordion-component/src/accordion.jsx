import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTabIndex: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (!event.target.matches('.header-layout')) {
      return;
    }
    const textArray = document.querySelectorAll('div.text-layout');
    const currentIndex = event.target.dataset.index;

    if (event.target.dataset.index === this.state.currentTabIndex) {
      for (let i = 0; i < textArray.length; i++) {
        textArray[i].classList.remove('menu-open');
      }
      this.setState({
        currentTabIndex: null
      });
    } else {
      this.setState({
        currentTabIndex: currentIndex
      });
      for (let j = 0; j < textArray.length; j++) {
        if (textArray[j].dataset.index === currentIndex) {
          textArray[j].classList.add('menu-open');
        } else {
          textArray[j].classList.remove('menu-open');
        }
      }
    }
  }

  render() {
    const allLanguages = this.props.languages.map(languages => {
      return (
        <React.Fragment key={ languages.id }>
          <div className="header-layout" data-index={ languages.id }>{ languages.name }</div>
          <div className="text-layout" data-index={ languages.id}>{ languages.text}</div>
        </React.Fragment>
      );
    });
    console.log(allLanguages);
    return (
      <div onClick={this.handleClick} className="class-container">
        { allLanguages }
      </div>
    );
  }
}
