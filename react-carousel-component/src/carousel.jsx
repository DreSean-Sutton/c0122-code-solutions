import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImgId: '001',
      currentIndex: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRightSwap = this.handleRightSwap.bind(this);
  }

  handleRightSwap() {
    console.log(this.props.imageArray);
    for (let i = 0; i < this.props.imageArray.length; i++) {
      if (i === this.props.imageArray.length - 1) {
        this.setState({
          currentImgId: this.props.imageArray[0].id,
          currentIndex: 0
        });
        return;
      }

      if (this.props.imageArray[i].id === this.state.currentImgId) {
        this.setState({
          currentImgId: this.props.imageArray[i + 1].id,
          currentIndex: i + 1
        });
        return;
      }
    }
  }

  handleClick(event) {
    console.log(this.props.imageArray);
    const currentDataIndex = event.target.dataset.index;
    this.setState({
      currentImgId: currentDataIndex
    });
  }

  handeShowImage(currentId) {
    if (currentId !== this.state.currentImgId) {
      return 'hidden';
    } else {
      return '';
    }
  }

  handleCircles(currentId) {
    if (currentId !== this.state.currentImgId) {
      return '';
    } else {
      return 'circle-active';
    }
  }

  render() {
    const imageElements = this.props.imageArray.map(image => {
      return (
        <img className={this.handeShowImage(image.id)} key={image.id} data-set={image.id} src={image.url} alt={image.name} />
      );
    });
    const circles = this.props.imageArray.map(circle => {
      return (
        <div onClick={this.handleClick} className={`circles ${this.handleCircles(circle.circleId)}`}key={circle.circleId} data-index={circle.circleId}></div>
      );
    });
    return (
      <div className="container">
        <div className="row content-layout">
          <i className="fa-solid fa-angles-left arrow-icons"></i>
          <div>
            { imageElements }
          </div>
          <i onClick={ this.handleRightSwap } className="fa-solid fa-angles-right arrow-icons"></i>
          <div className="row circles-layout">
            { circles }
          </div>
        </div>
      </div>
    );
  }
}
