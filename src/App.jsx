import "./index.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import LoadingBox from "./Components/LoadingBox";
import React, { Suspense, useEffect, useState } from "react";
// import Section1 from "./Components/section1";
import Section2 from "./Components/section2";
// import Section3 from "./Components/section3";
import Slider from "./Components/slider";
import MultipleItems from "./Components/Section5";
const Section1 = React.lazy(() => import("./Components/section1"));

function App() {
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false), 1000);
  // }, []);
  return (
    <div className='d-flex flex-column site-container'>
      <header>
        <Navbar
          bg='dark'
          variant='dark'
          className=' shadow-5-strong'
          style={{
            backdropFilter: "blur(10px)",
            position: "fixed",
            color: "white",
            width: "100%",
            zIndex: 10000,
          }}
        >
          <Container>
            <Navbar.Brand href='#home'>Personel</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#features'>About</Nav.Link>
              <Nav.Link href='#pricing'>Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Suspense
          fallback={
            <div>
              <LoadingBox />
            </div>
          }
        >
          {isLoading ? (
            <LoadingBox />
          ) : (
            <div>
              <Navbar />
              <Section1 />
              <Container>
                <MultipleItems />
              </Container>
              <Section2 />
              {/* <Section3 /> */}
              {/* <Slider /> */}
            </div>
          )}
          /
        </Suspense>
      </main>
      <footer>
        <div className='text-center'>All right reserved</div>
      </footer>
    </div>
  );
}

export default App;
