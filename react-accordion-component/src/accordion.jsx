import React from 'react';

const htmlText = 'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page\'s appearance/presentation (CSS) or functionality/behavior(JavaScript).';
const cssText = 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.';
const javascriptText = 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.';
const reactText = 'React is a library... Yea, that\'s it, thanks.';
const languages = [
  { id: '1', name: 'Hypertext Markup Language', text: htmlText },
  { id: '2', name: 'Cascading Style Sheets', text: cssText },
  { id: '3', name: 'JavaScript', text: javascriptText },
  { id: '4', name: 'React', text: reactText }
];

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
    const allLanguages = languages.map(languages => {
      return (
        <React.Fragment key={ languages.id }>
          <div className="header-layout" data-index={ languages.id }>{ languages.name }</div>
          <div className="text-layout" data-index={ languages.id}>{ languages.text}</div>
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
