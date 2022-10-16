import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import BackgroundAnimation from "./BackgroundAnimation";
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">          
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2>Let's Talk</h2>
              <p>I am always open for new opportunities, whether it be freelance work, constructive criticism, or even a casual conversation!</p>
              <span className="contact-text">              
                <a href="mailto:jasolamo@gmail.com"><button>Send a message</button></a>                
              </span>
              </div>}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>          
            <TrackVisibility>
              <BackgroundAnimation />
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
