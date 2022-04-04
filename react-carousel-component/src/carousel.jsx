import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImgId: '001',
      intervalId: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRightSwap = this.handleRightSwap.bind(this);
    this.handleLeftSwap = this.handleLeftSwap.bind(this);
    this.manageCarousel = this.manageCarousel.bind(this);
  }

  manageCarousel() {
    clearInterval(this.state.intervalId);
    this.setState({
      intervalId: setInterval(() => {
        this.handleRightSwap();
      }, 3000)
    });
  }

  handleLeftSwap() {
    const imageArray = this.props.imageArray;
    this.manageCarousel();
    if (imageArray[0].id === this.state.currentImgId) {
      this.setState({
        currentImgId: imageArray[imageArray.length - 1].id
      });
    } else {
      for (let i = 0; i < imageArray.length; i++) {
        if (this.state.currentImgId === imageArray[i].id) {
          this.setState({
            currentImgId: imageArray[i - 1].id
          });
        }
      }
    }
  }

  handleRightSwap() {
    const imageArray = this.props.imageArray;
    this.manageCarousel();

    if (this.state.currentImgId === imageArray[imageArray.length - 1].id) {
      this.setState({
        currentImgId: imageArray[0].id
      });

    } else {
      for (let i = 0; i < imageArray.length; i++) {
        if (this.state.currentImgId === imageArray[i].id) {

          this.setState({
            currentImgId: imageArray[i + 1].id
          });
        }
      }
    }
  }

  handleClick(event) {
    const imageArray = this.props.imageArray;
    const currentDataIndex = event.target.dataset.index;
    this.manageCarousel();

    for (let i = 0; i < imageArray.length; i++) {
      if (imageArray[i].circleId === currentDataIndex) {
        this.setState({
          currentImgId: currentDataIndex,
          currentIndex: i
        });
      }
    }
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

  componentDidMount() {
    this.manageCarousel();
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
          <i onClick={ this.handleLeftSwap } className="fa-solid fa-angles-left arrow-icons"></i>
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
