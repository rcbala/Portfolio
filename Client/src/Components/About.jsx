import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import './About.css'
import { Link } from 'react-router-dom';
import Contact from './Contact';
const About = () => {
  return (
    <div className=" container home  mt-4">
      <Row className="justify-content-center align-items-center">
              <Col md={4} className="text-center position-relative mt-4">
                 
          <img
            src="./public/IMG_1798.jpg"
            className=" img-fluid rounded-circle"  
            width={450}
            height={500}
                      ></img>
                      
              </Col>
               <Col md={6} className="col-md-6 text-left  mb-4 mb-md-0 ">
          <div className='About-content'>
           <h2 className='About-me'>About Me:</h2>
          <p className='About-description'>
            I am a passionate and dedicated software developer with a strong background in web development. 
            My journey in programming began several years ago, and since then, I have been constantly learning 
            and honing my skills to become proficient in various technologies and frameworks.
          </p>
          <p className='About-description'>
            My expertise lies in frontend development, where I specialize in creating dynamic and user-friendly 
            interfaces using modern JavaScript frameworks such as React.js. I am also experienced in backend 
            development, working with Node.js and Express to build robust server-side applications.
          </p>
          <p className='About-description'>
            In addition to my technical skills, I am a team player who enjoys collaborating with others to 
            solve complex problems and deliver high-quality solutions. I am always eager to take on new challenges 
            and expand my knowledge in the ever-evolving field of software development.
          </p>
        
                        <Link to="/contact" className='btn btn-primary'>Let's Talk</Link>
                  </div>
                  </Col>
       
      </Row>
      </div>
      
  );
};

export default About;
 