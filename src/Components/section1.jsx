import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import "animate.css";

const Section1 = () => {
  return (
    <div style={{ height: "400px", backgroundColor: "black", color: "white" }}>
      <Container>
        <Row style={{ marginTop: "-16px" }}>
          <Col md={8} style={{ marginTop: "121px" }}>
            <h4>Hello, My Name is</h4>
            <h1
              class='animate__animated animate__backInUp animate__duration-3s'
              style={{}}
            >
              Muhammad Danish
            </h1>
            <h3 style={{ marginTop: "-11px", marginBottom: "36px" }}>
              Web Developer
            </h3>
            <Button>Start a Project</Button>
            <Button style={{ marginLeft: "5px" }}>More About Me</Button>
          </Col>
          <Col md={4} style={{ marginTop: "134px" }}>
            <div
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: " flex-end",
              }}
            >
              <span style={{ marginBottom: "7px" }}>
                <i class='bi bi-facebook'></i>
              </span>
              <span style={{ marginBottom: "7px" }}>
                <i class='bi bi-whatsapp'></i>
              </span>
              <span style={{ marginBottom: "7px" }}>
                <i class='bi bi-messenger'></i>
              </span>
              <span style={{ marginBottom: "7px" }}>
                <i class='bi bi-instagram'></i>
              </span>
              <span style={{ marginBottom: "7px" }}>
                <i class='bi bi-twitter'></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section1;
