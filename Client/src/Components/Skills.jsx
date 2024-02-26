import React from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fade } from "react-awesome-reveal";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <div>
        <h1 className="my-skill">MY SKILLS</h1>
      </div>
      <Fade direction="up">
        <div className="container skill-section">
          <Row>
            <Col md={6}>
              <h2 className="skills-title">Front End</h2>
              <h4 className="skill-tech">Html </h4>
              <ProgressBar animated now={85} variant="warning" label="85%" />
              <h4 className="skill-tech">React JS</h4>
              <ProgressBar animated now={80} variant="warning" label="80%" />
              <h4 className="skill-tech">CSS</h4>
              <ProgressBar animated now={75} variant="warning" label="75%" />
              <h4 className="skill-tech">Bootstrap</h4>
              <ProgressBar animated now={80} variant="warning" label="80%" />
            </Col>
            <Col md={6}>
              <h2 className="skills-title">Back End</h2>
              <h4 className="skill-tech">Nodejs</h4>
              <ProgressBar animated now={90} variant="warning" label="90%" />

              <h4 className="skill-tech">ExpressJs </h4>
              <ProgressBar animated now={80} variant="warning" label="80%" />
              <h4 className="skill-tech">MongoDb</h4>
              <ProgressBar animated now={80} variant="warning" label="80%" />
              <h4 className="skill-tech">Mysql</h4>
              <ProgressBar animated now={40} variant="warning" label="40%" />
            </Col>
          </Row>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
