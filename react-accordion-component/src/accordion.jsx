import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTabIndex: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClassChange = this.handleClassChange.bind(this);
  }

  handleClick(event) {
    const clickIndex = event.target.dataset.index;
    if (!event.target.matches('.header-layout')) {
      return;
    }
    if (this.state.currentTabIndex === clickIndex) {
      this.setState({
        currentTabIndex: null
      });
    } else {
      this.setState({
        currentTabIndex: clickIndex
      });
    }
  }

  handleClassChange(currentId) {
    if (currentId === this.state.currentTabIndex) {
      return 'open';
    } else {
      return 'close';
    }
  }

  render() {
    const allLanguages = this.props.languageArray.map(languages => {
      return (
        <React.Fragment key={ languages.id }>
          <div className="header-layout" data-index={ languages.id }>{ languages.name }</div>
          <div className={`text-layout menu-${this.handleClassChange(languages.id)}`} data-index={ languages.id}>{ languages.text}</div>
        </React.Fragment>
      );
    });
    return (
      <div onClick={this.handleClick} className="class-container">
        { allLanguages }
      </div>
    );
  }
}
