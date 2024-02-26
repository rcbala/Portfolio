import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import resume from "../../src/assets/Resume.pdf";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import Zoom from 'react-reveal/Zoom';
import { Fade } from "react-awesome-reveal";

import "./Home.css";

const Home = () => {
  return (
    <div className=" container home  mt-5">
      <Row className="justify-content-center align-items-center">
        <Col md={6} className="col-md-6 text-left  mb-4 mb-md-0">
          <Fade direction="left">
            <div>
              <h4 className="home-title">
                Hi <br />
                I'm a <span className="span-name">Balasubramani</span>{" "}
              </h4>
              <h2 className="Typewriter">
                <Typewriter
                  options={{
                    strings: ["MERN Stack Developer!", "Full Stack Developer!"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>

              <Button
                className="mt-5"
                variant="success"
                href={resume}
                download="bala_resume.pdf"
              >
                Download Resume
              </Button>
            </div>

            <div className="social-links mt-4 ">
              <a
                href="https://github.com/rcbala"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link1"
              >
                <FaGithub className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/balasubramani-r-790722293/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link2"
              >
                <FaLinkedin className="icon" />
              </a>
              <a
                href="https://twitter.com/example"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link3"
              >
                <FaTwitter className="icon" />
              </a>
            </div>
          </Fade>
        </Col>

        <Col md={4} className="text-center position-relative mt-5">
          <Fade direction="right">
            <img
              src="./public/IMG_1798.jpg"
              className=" img-fluid rounded-circle "
              width={450}
              height={500}
            ></img>
          </Fade>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
