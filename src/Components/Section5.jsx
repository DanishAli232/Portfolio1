import React, { Component } from "react";
import Slider from "react-slick";
import img7 from "../Images/img17.png";
import img8 from "../Images/img15.png";
import img9 from "../Images/img11.png";
import img10 from "../Images/img13.png";
import img11 from "../Images/img14.png";
import img12 from "../Images/img16.png";
import img13 from "../Images/img18.png";
import img14 from "../Images/img19.png";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div style={{ marginBottom: "40px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            marginTop: "16px",
          }}
        >
          Main Interest Subjects
        </h2>
        <Slider {...settings}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "243px", height: "218px", marginTop: "15px" }}
                src={img7}
                alt=''
              />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "243px", height: "250px" }}
                src={img8}
                alt=''
              />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "243px", height: "250px" }}
                src={img9}
                alt=''
              />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "243px", height: "218px" }}
                src={img10}
                alt=''
              />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "243px", height: "218px" }}
                src={img11}
                alt=''
              />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "243px", height: "218px" }}
                src={img12}
                alt=''
              />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "243px", height: "218px" }}
                src={img13}
                alt=''
              />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "auto", height: "218px" }}
                src={img14}
                alt=''
              />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "243px", height: "218px" }}
                src={img7}
                alt=''
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
