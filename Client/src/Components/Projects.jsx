import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Projects.css";
import { Fade } from "react-awesome-reveal";
import project1 from "../Images/project1.png"
import project2 from "../Images/project2.png"
import project3 from "../Images/project3.png"

const Projects = () => {
  return (
    <div className="container mt-2  ">
      <h2 className="mb-4  text-center project-heading">MY PROJECTS</h2>
      <div className="d-flex justify-content-center">
        <Row xs={1} md={2} className="g-5 mt-1 align-item-center ">
          <Col md={4}>
            <Fade direction="left">
              <Card
                className="card shadow  projects-card"
                style={{ width: "20rem" }}
              >
                <div className="inner">
                  <Card.Img variant="top" src={project1} />
                </div>

                <Card.Body>
                  <Card.Title className="project-title">
                    TRAVEL LANDING PAGE
                  </Card.Title>
                  <Card.Text className="project-description">
                    Web Application Made by Travelers user friendly, technology
                    like HTML And CSS
                  </Card.Text>
                  <div className="projects-buttons">
                    <Button
                      variant="primary"
                      className="projects-buttons1"
                      href=" https://github.com/rcbala/travel.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </Button>
                    <Button
                      variant="success"
                      href="https://venerable-kangaroo-1c123b.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col md={4}>
            <Fade direction="up">
              <Card
                className="card shadow  projects-card"
                style={{ width: "20rem" }}
              >
                <div className="inner">
                  <Card.Img variant="top" src={project2} />
                </div>

                <Card.Body>
                  <Card.Title className="project-title">
                    RESTAURENT LANDING PAGE
                  </Card.Title>
                  <Card.Text className="project-description">
                    Web Application user friendly and also responsive,technology
                    like HTML,CSS and Boostrap
                  </Card.Text>
                  <div className="projects-buttons">
                    <Button
                      variant="primary"
                      className="projects-buttons1"
                      href=" https://github.com/rcbala/HOTEL.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </Button>
                    <Button
                      variant="success"
                      href="https://heroic-parfait-def2de.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col md={4}>
            <Fade direction="right">
              <Card
                className="card shadow  projects-card"
                style={{ width: "20rem" }}
              >
                <div className="inner">
                  <Card.Img variant="top" src={project3} />
                </div>

                <Card.Body>
                  <Card.Title className="project-title">BLOG APP</Card.Title>
                  <Card.Text className="project-description">
                    Using CRUD operation,technology
                    like,HTML,CSS,Boostrap,reactjs,
                    <br />
                    Nodejs,MongoDB
                  </Card.Text>
                  <div className="projects-buttons">
                    <Button
                      variant="primary"
                      className="projects-buttons1"
                      href=" https://github.com/rcbala/Blog-Client.git "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </Button>
                    <Button
                      variant="success"
                      href="https://technologyblog-app.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Projects;
