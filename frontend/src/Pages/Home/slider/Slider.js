import Carousel from 'react-bootstrap/Carousel';
import sliderimage1 from './images/sliderimage1.webp';
import sliderimage2 from './images/sliderimage2.webp';
import sliderimage3 from './images/sliderimage3.webp';

function Slider() {

  return (
    <Carousel
    autoPlay={true}
    interval={5000}
    controls={false}
    indicators={true}
  >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderimage1}
          alt="First slide"
          style={{width: '100%', height: '600px',objectFit:'cover', objectPosition:'50% 60%'}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderimage2}
          alt="Second slide"
          style={{width: '100%', height: '600px',objectFit:'cover', objectPosition:'50% 60%'}}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderimage3}
          alt="Third slide"
          style={{width: '100%', height: '600px',objectFit:'cover'}}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
