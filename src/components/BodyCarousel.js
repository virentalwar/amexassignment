import React from 'react';
import { Carousel } from 'react-bootstrap';
import imageone from '../images/imageone.jpg';
import imagetwo from '../images/imagetwo.jpg';
import imagethree from '../images/imagethree.jpg';

class BodyCarousel extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageone}
            alt="First slide"
            style={{ height: 'calc(100vh - 95px)' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagetwo}
            alt="Third slide"
            style={{ height: 'calc(100vh - 95px)' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagethree}
            alt="Third slide"
            style={{ height: 'calc(100vh - 95px)' }}
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default BodyCarousel;
