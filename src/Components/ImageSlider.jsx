import React, { Component } from 'react';

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  nextImage = () => {
    this.setState((prevState) => ({
      currentImageIndex:
        (prevState.currentImageIndex + 1) % this.props.images.length,
    }));
  };

  prevImage = () => {
    this.setState((prevState) => ({
      currentImageIndex:
        (prevState.currentImageIndex - 1 + this.props.images.length) %
        this.props.images.length,
    }));
  };

  render() {
    const { images } = this.props;
    const { currentImageIndex } = this.state;

    return (
      <div className="image-slider">
        <button className='btn btn-info me-2' onClick={this.prevImage}>Previous</button>
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
        <button className='btn btn-info ms-2' onClick={this.nextImage}>Next</button>
      </div>
    );
  }
}

function ImageSliderr() {
  const images = [
    'https://i.postimg.cc/Pfz7zG7G/nature.jpg',
    'https://i.postimg.cc/3JGY5j3j/nature2.jpg',
    'https://i.postimg.cc/D0hywF1g/dddd.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div className="App m-5 p-5 justify-content-center align-items-center">
      <ImageSlider images={images} />
    </div>
  );
}

export default ImageSliderr;