import React, { Component } from "react";
import Slider from "react-slick";
import Data from '../server/ImgData.json';

export default class Responsive extends Component {
  render() {
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
      </div>
    );
  }
}