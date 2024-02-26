import React from "react";
import { Container } from "react-bootstrap";
import "./Education.css";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  return (
    <div className="mt-2 ">
      <Container>
        <Fade direction="up">
          <h2 className="text-center education-tittle">EDUCATION</h2>
          <div className="timeline ">
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>SCHOOL</h4>
                <p>TAHSS</p>
                <p>2019</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>COLLEGE </h4>
                <p>BCA, Computer Application</p>
                <p>Jamal Mohamed College,Trichy</p>

                <p>2022</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h4>COURSE</h4>
                <p>MERN Stack Developer,</p>
                <p>GUVI,Chennai</p>
              </div>
            </div>
          </div>
        </Fade>
      </Container>
    </div>
  );
};
export default Education;
