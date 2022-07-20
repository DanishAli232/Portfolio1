import React, { useEffect } from "react";
import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const Section2 = () => {
  const [val, setval] = useState("");
  const [number, newNumber] = useState(0);
  const [number1, newNumber1] = useState(0);
  const [number2, newNumber2] = useState(0);
  const [number3, newNumber3] = useState(0);

  window.onscroll = function () {
    myFunction();
  };

  const limiter = 100;
  React.useEffect(() => {
    const incrementer = setInterval(() => {
      newNumber((c) => {
        if (c < limiter) return c + 1;
        clearInterval(incrementer);
        return c;
      });
    }, 200);
  }, []);

  const limiter1 = 50;
  React.useEffect(() => {
    const incrementer = setInterval(() => {
      newNumber1((c) => {
        if (c < limiter1) return c + 1;
        clearInterval(incrementer);
        return c;
      });
    }, 200);
  }, []);

  const limiter2 = 30;
  React.useEffect(() => {
    const incrementer = setInterval(() => {
      newNumber2((c) => {
        if (c < limiter2) return c + 1;
        clearInterval(incrementer);
        return c;
      });
    }, 200);
  }, []);

  const limiter3 = 70;
  React.useEffect(() => {
    const incrementer = setInterval(() => {
      newNumber3((c) => {
        if (c < limiter3) return c + 1;
        clearInterval(incrementer);
        return c;
      });
    }, 200);
  }, []);

  function myFunction() {
    if (window.pageYOffset >= 50) {
      setval("animate__animated animate__backInUp animate__duration-3s");
    }
  }
  return (
    <div style={{ backgroundColor: "lightgreen" }}>
      <Container>
        <Row
          style={{ textAlign: "center", height: "400px", marginTop: "-16px" }}
        >
          <Col style={{ marginTop: "60px" }}>
            <h3 className={val} style={{ fontSize: "50px" }}>
              We Are Awesome
            </h3>
            <p
              className={val}
              style={{ textAlign: "justify", fontSize: "15px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, quis maiores. Sint dicta eligendi nobis,
              necessitatibus laboriosam beatae vel nemo tempore possimus qui!
              Beatae in inventore unde suscipit velit eius? Consectetur enim
              dolores eos nulla architecto voluptate eum! Quo fugit ab optio
              provident in consectetur repellendus architecto molestiae veniam
              ad a quos corrupti necessitatibus, laudantium illo rem iure?
              Expedita omnis cupiditate ducimus blanditiis fugiat magni
              accusamus, officia, commodi facilis, voluptas voluptatum sed
              inventore quaerat quos accusantium quisquam enim! Expedita placeat
              assumenda recusandae suscipit deserunt dolorum hic at iure
              nostrum! Ut unde nulla maxime quia, accusantium delectus
              dignissimos earum natus corporis?
            </p>
          </Col>

          <Row>
            <Col>
              <div>
                <h1
                  style={{
                    color: "white",
                    fontSize: "56px",
                    fontWeight: "700",
                  }}
                >
                  {number1}
                </h1>
                <h5 style={{ fontSize: "26px", fontFamily: "system-ui" }}>
                  Awards Recieved
                </h5>
              </div>
            </Col>
            <Col>
              <div>
                <h1
                  style={{
                    color: "white",
                    fontSize: "56px",
                    fontWeight: "700",
                  }}
                >
                  {number}
                </h1>
                <h5 style={{ fontSize: "26px", fontFamily: "system-ui" }}>
                  Projects
                </h5>
              </div>
            </Col>
            <Col>
              <div>
                <h1
                  style={{
                    color: "white",
                    fontSize: "56px",
                    fontWeight: "700",
                  }}
                >
                  {number2}
                </h1>
                <h5 style={{ fontSize: "26px", fontFamily: "system-ui" }}>
                  Happy Client
                </h5>
              </div>
            </Col>
            <Col>
              <div>
                <h1
                  style={{
                    color: "white",
                    fontSize: "56px",
                    fontWeight: "700",
                  }}
                >
                  {number3}
                </h1>
                <h5 style={{ fontSize: "26px", fontFamily: "system-ui" }}>
                  Projects
                </h5>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Section2;
