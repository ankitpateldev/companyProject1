import React, { Component } from "react";
import Slider from "react-slick";
import Data from '../server/ImgData.json';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class Responsive extends Component {
  render() {
    const styles = {
      banner: {
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '24px',
        fontSize: '18px',
        fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        color: '#ffffff',
        boxSizing: 'inherit',
        background: '#1f4a91',
        padding: '17px',
        marginTop: '20px',
        textTransform: 'uppercase'
      },
      button: {
        backgroundColor: '#444444',
        fontWeight: 'bold',
        borderColor: '#444444',
      },
    };
    var settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
        {Data.Tent.map((value) => (
            <div
              className="d-flex flex-row justify-content: space-evenly"
              key={value.id}
            >
              <div className="g-4 shadow p-2">
  <img
    src={value.image}
    className="img-fluid"
    alt=""
  />
        <div className="card-body">
  <h5 className="card-title">{value.description}</h5>
  <p className="card-text author">{value.author}</p>
  <div className="d-flex justify-content-between align-items-center">
    <h5>₹{value.price}</h5>
  </div>
</div>
</div>
        
 </div>
        ))}
        </Slider>
        <div className="hm-sale-banner" style={styles.banner}>
      <Container>
        <Row>
          <Col md={10}>
            <div className="hm-sb-text">Unbeatable Sale | All-New Custom Logo Tents Up to 10% OFF!</div>
          </Col>
          <Col md={2} className="text-center">
            <Button variant="primary" href="https://customtentwithlogo.com/collections/hot-tent-deals">View Products</Button>
          </Col>
        </Row>
      </Container>
    </div>
    <Container>
  <h2 className="text-below"><span>Don't Limit Your Creativity - Standard and Custom Pop Up Tent Sizes</span></h2>
  <Row className="justify-content-center justify-content-lg-between">
    <Col xs={12} md={6} lg={4}>
      <div className="hmtc-details">
        <a href="https://customtentwithlogo.com/collections/canopy-10c">
          <div className="hmtc-img">
            <img data-webpconverted="1" src="https://customtentwithlogo.com/media/wysiwyg/ctl-hm-img-1.png" alt="full printed custom canopy tent with graphics" title="10x10 Custom Canopy Tents" />
          </div>
          <div className="hmtc-title">10x10 Custom Canopy Tents</div>
        </a>
        <div className="hmtc-text">View Our Range Of Tent Packages Deals</div>
      </div>
    </Col>
    <Col xs={12} md={6} lg={4}>
      <div className="hmtc-details">
        <a href="https://customtentwithlogo.com/collections/canopy-15c">
          <div className="hmtc-img">
            <img data-webpconverted="1" src="https://customtentwithlogo.com/media/wysiwyg/ctl-hm-img-2.png" alt="Custom canopies with your brand logo" title="10x15 Custom Canopies" />
          </div>
          <div className="hmtc-title">10x15 Custom Canopies</div>
        </a>
        <div className="hmtc-text">View Our Range Of Tent Packages Deals</div>
      </div>
    </Col>
    <Col xs={12} md={6} lg={4}>
      <div className="hmtc-details">
        <a href="https://customtentwithlogo.com/collections/canopy-20c">
          <div className="hmtc-img">
            <img data-webpconverted="1" src="https://customtentwithlogo.com/media/wysiwyg/ctl-hm-img-3.png" alt="Custom pop up tents with graphics" title="10x20 Custom Pop Up Tents" />
          </div>
          <div className="hmtc-title">10x20 Custom Pop Up Tents</div>
        </a>
        <div className="hmtc-text">View Our Range Of Tent Packages Deals</div>
      </div>
    </Col>
  </Row>
</Container>


      </div>
    );
  }
}